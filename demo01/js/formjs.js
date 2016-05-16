var MyForm = React.createClass({
    componentDidMount: function(){
        //执行
        JPlaceHolder.init();

    },


    getInitialState: function() {
        return {
            username: "",
            usernameError: "真实姓名（必填）",
            usernameStyle:"right",

            agencyname: "",
            agencynameError: "机构名称（必填）",
            agencynameStyle:"right",

            phonenum: "",
            phonenumError: "手机号码（必填）",
            phonenumStyle:"right",


            verifycode:"",
            verifycodeError: "请输入验证码",
            verifycodeStyle:"right",

            email: "",
            emailError: "公司邮箱（使用此邮箱登录，请填写正确的邮箱信息）",
            emailStyle:"right",

            qq:"",
            qqError: "QQ号码",
            qqStyle:"right",

            btntxt:"获取验证码",
            btnstyle:"btn",
            btndisable:"",
            countdown:5

        };
    },
    handleChange:function (name, event) {
        var newState={};
        newState[name]=event.target.value;
        this.setState(newState);
    },


    //倒计时方法
    interval:null,
    sleep:10,
    flog:true,
    clickHandle:function () {

        var phonenumvalue1=this.state.phonenum;
        var phonenumerror1 = '';
        var phonenumstyle1="right";
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(phonenumvalue1))) {
            phonenumerror1 = '请输入正确的手机号';
            phonenumstyle1="error invalid" ;
            phonenumvalue1="";
            this.addPlaceholder(phonenumerror1,'phonenum');
            this.setState({
                phonenum:phonenumvalue1,
                phonenumError: phonenumerror1,
                phonenumStyle: phonenumstyle1
            });
            return;
        }
        this.setState({
            phonenum:phonenumvalue1,
            phonenumError: phonenumerror1,
            phonenumStyle: phonenumstyle1
        });

        if(!this.interval)
        {
            var text=   " (" + this.sleep-- +")秒后重新发送";
            this.setState({
                btntxt: text,
                btnstyle:"btngray",
                btndisable:"disabled"
            });
            this.interval=   setInterval(this.tick,1000);
        }
    },
    tick:function () {
        if (this.sleep == 0)
        {
            if (!!this.interval)
            {
                clearInterval (this.interval);
                this.interval = null;
                this.sleep = 10;
                this.setState({
                    btntxt: "重新发送",
                    btnstyle:"btn",
                    btndisable:""
                });
            }
            return false;
        }
        this.setState({
            btntxt: " (" + this.sleep-- +")秒后重新发送",
            btnstyle:"btngray",
            btndisable:"disabled"
        });
        //btn.value = "重新发送 (" + this.sleep-- + ")";
    },
    addPlaceholder: function(msg,id){
        var $p = $('#'+id).parent();
        var $wrap = $p.find('.wrap_placeholder');
        if($wrap.length){
            var holder = $wrap.find('span').text(msg);
            var $input = $p.find("input[type='text']");

            var w =  $('#'+id).outerWidth();
            var w1 = holder.outerWidth();
            var next = $input.next();
            if(next.length && next[0] != $wrap[0]){
                w += $input.next().outerWidth();alert(w);
            }
            holder.css({"position": "relative","left":(w1-w)/2+20});


            $p.find("input[type='text']").trigger("focusout");
        }
    },
     checkphonenum:function(){
         //电话验证
         var phonenumvalue1 = this.state.phonenum;
         var phonenumerror1 = '';
         var phonenumstyle1="right";
         if(!(/^1[3|4|5|7|8]\d{9}$/.test(phonenumvalue1))) {
             phonenumerror1 = '请输入正确的手机号';
             phonenumstyle1="error invalid" ;
             phonenumvalue1="";
             this.addPlaceholder(phonenumerror1,'phonenum');
             if ( e && e.preventDefault )
                 e.preventDefault();
             //IE中阻止函数器默认动作的方式
             else
                 window.event.returnValue = false;
//            return false;
         }
         this.setState({
             phonenum:phonenumvalue1,
             phonenumError: phonenumerror1,
             phonenumStyle: phonenumstyle1
         });
    },
    handleSubmit:function (e) {
        var qqvalue1=this.state.qq;
        qqvalue1=qqvalue1.trim();
        var qqerror1='';
        var qqstyle1='right';

        if(qqvalue1!=""){

            if(qqvalue1.search(/^[1-9]\d{4,8}$/) !=-1){

             }else{

                qqerror1 = '请输入正确的QQ号';
                qqstyle1="error invalid" ;
                qqvalue1="";
                this.addPlaceholder(qqerror1,'qq');
                if ( e && e.preventDefault )
                    e.preventDefault();
                //IE中阻止函数器默认动作的方式
                else
                    window.event.returnValue = false;
    //            return false;
             }
      }else{
            alert("sdfsdf");
            qqerror1 = 'QQ号';
            this.addPlaceholder(qqerror1,'qq');
    }
        this.setState({
            qq:qqvalue1,
            qqError: qqerror1,
            qqStyle:  qqstyle1
        });

        //用户名验证
        var usernamevalue1 = this.state.username;
        var usererror1 = '';
        var userstyle1="right";
        if(usernamevalue1.trim()=='') {
            usererror1 = '请输入用户名';
            userstyle1="error invalid" ;
            usernamevalue1="",

            this.addPlaceholder(usererror1,'username');
            if ( e && e.preventDefault )
                e.preventDefault();
            //IE中阻止函数器默认动作的方式
            else
                window.event.returnValue = false;
//            return false;
        }
        this.setState({
            username:usernamevalue1,
            usernameError: usererror1,
            usernameStyle:  userstyle1
        });
        //机构名称验证
        var agencynamevalue1 = this.state.agencyname;
        var agencynameerror1 = '';
        var agencynamestyle1="right";
        if(agencynamevalue1.trim()=='') {
            agencynamevalue1="",
            agencynameerror1 = '请输入机构名称';
            agencynamestyle1="error invalid" ;
            this.addPlaceholder(agencynameerror1,'agencyname');
            if ( e && e.preventDefault )
                e.preventDefault();
            //IE中阻止函数器默认动作的方式
            else
                window.event.returnValue = false;
//            return false;
        }
        this.setState({
            agencyname:agencynamevalue1,
            agencynameError: agencynameerror1,
            agencynameStyle:agencynamestyle1
        });
        //电话验证
        var phonenumvalue1 = this.state.phonenum;
        var phonenumerror1 = '';
        var phonenumstyle1="right";
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(phonenumvalue1))) {
            phonenumerror1 = '请输入正确的手机号';
            phonenumstyle1="error invalid" ;
            phonenumvalue1="";
            this.addPlaceholder(phonenumerror1,'phonenum');
            if ( e && e.preventDefault )
                e.preventDefault();
            //IE中阻止函数器默认动作的方式
            else
                window.event.returnValue = false;
//            return false;
        }
        this.setState({
            phonenum:phonenumvalue1,
            phonenumError: phonenumerror1,
            phonenumStyle: phonenumstyle1
        });

        //验证码验证
        var verifycodevalue1 = this.state.verifycode;
        var verifycodeerror1 = '';
        var verifycodestyle1="right";
        if(verifycodevalue1.trim()=='') {
            verifycodevalue1="";
            verifycodeerror1 = '请输入验证码';
            verifycodestyle1="error invalid" ;
            this.addPlaceholder(verifycodeerror1,'verifycode');
            if ( e && e.preventDefault )
                e.preventDefault();
            //IE中阻止函数器默认动作的方式
            else
                window.event.returnValue = false;
//            return false;
        }
        this.setState({
            verifycode:verifycodevalue1,
            verifycodeError: verifycodeerror1,
            verifycodeStyle:verifycodestyle1
        });



        // 公司邮箱验证
        var emailvalue1 = this.state.email;
        var emailerror1 = '';
        var emailstyle1 ='right';
        if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailvalue1))) {
            emailerror1 = '请输入正确的Email';
            emailvalue1="";
            emailstyle1="error invalid" ;
            this.addPlaceholder(emailerror1,'email');
            if ( e && e.preventDefault )
                e.preventDefault();
            //IE中阻止函数器默认动作的方式
            else
                window.event.returnValue = false;
//            return false;
        }
        this.setState({
           email:emailvalue1,
            emailError: emailerror1,
            emailStyle:  emailstyle1
        });
    },
    render: function() {

        return (
            <form action="success.html" onSubmit={this.handleSubmit}>
                <div>
                    <p className={this.state.usernameStyle}>
                        <input type='text' name='username' id='username' placeholder={this.state.usernameError} value={this.state.username}  onChange={this.handleChange.bind(this,"username")} />
                    </p>
                    <p className={this.state.agencynameStyle}>
                        <input type='text' name='agencyname' id='agencyname'placeholder={this.state.agencynameError}  value={this.state.agencyname} onChange={this.handleChange.bind(this,"agencyname") }/>

                    </p>
                    <p className={this.state.phonenumStyle}>
                        <input type='text' name='phonenum' id='phonenum' placeholder={this.state.phonenumError} value={this.state.phonenum} onChange={this.handleChange.bind(this,"phonenum")} />
                    </p>
                    <p className={this.state.verifycodeStyle}>
                        <input type='text' name='verifycode' id='verifycode' style={{width:"240px"}}  placeholder={this.state.verifycodeError}  onChange={this.handleChange.bind(this,"verifycode")} />
                        <input type="button"   value={this.state.btntxt} style={{width:"150px",height:"40px",marginLeft:"10px",borderRadius:'5px'}} className={this.state.btnstyle} disabled={this.state.btndisable} onClick={this.clickHandle} />

                    </p>
                    <p className={this.state.emailStyle}>
                        <input type='text' name='email'  id='email' placeholder={this.state.emailError}   value={this.state.email} onChange={this.handleChange.bind(this,"email")} />

                    </p>
                    <p className={this.state.qqStyle}>
                        <input type='text' name='qq' id='qq' placeholder={this.state.qqError} value={this.state.qq}  onChange={this.handleChange.bind(this,"qq")} />
                    </p>
                </div>
                <input type="submit" style={{width:"420px",height:"40px",marginTop:"20px", borderRadius:'5px'}} className="btn" value="提交"/>
            </form>
            )
    }
});
ReactDOM.render(
    <MyForm />,
    document.getElementById("form1")
);