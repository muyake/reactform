var MyForm = React.createClass({
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
    clickHandle:function () {
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

    handleSubmit:function (e) {
        //用户名验证
        var usernamevalue = this.state.username;
        var usererror = '';
        var userstyle="right";
        if(usernamevalue.trim()=='') {
            usererror = '请输入用户名';
            userstyle="error invalid" ;
            e.preventDefault();
        }
        this.setState({
            usernameError: usererror,
            usernameStyle:  userstyle
        });
        //机构名称验证
        var agencynamevalue = this.state.agencyname;
        var agencynameerror = '';
        var agencynamestyle="right";
        if(agencynamevalue.trim()=='') {
            agencynameerror = '请输入机构名称';
            agencynamestyle="error invalid" ;
            event.preventDefault();
        }
        this.setState({
            agencynameError: agencynameerror,
            agencynameStyle:agencynamestyle
        });
        //电话验证
        var phonenumvalue = this.state.phonenum;
        var phonenumerror = '';
        var phonenumstyle="right";
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(phonenumvalue))) {
            phonenumerror = '请输入正确的手机号';
            phonenumstyle="error invalid" ;
            phonenumvalue="";
            e.preventDefault();
        }
        this.setState({
            phonenum:phonenumvalue,
            phonenumError: phonenumerror,
            phonenumStyle: phonenumstyle
        });
        // 公司邮箱验证
        var emailvalue = this.state.email;
        var emailerror = '';
        var emailstyle ='right';
        if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailvalue))) {
            emailerror = '请输入正确的Email';
            emailstyle="error invalid" ;
            event.preventDefault();
        }
        this.setState({
            emailError: emailerror,
            emailStyle:  emailstyle
        });
    },
    render: function() {

        return (
            <form action="success.html" onSubmit={this.handleSubmit}>
                <div>
                    <p>
                        <input type='text' name='username' id='username' placeholder={this.state.usernameError} className={this.state.usernameStyle} value={this.state.username}  onChange={this.handleChange.bind(this,"username")} />
                    </p>
                    <p>
                        <input type='text' name='agencyname' id='agencyname'placeholder={this.state.agencynameError} className={this.state.agencynameStyle}  value={this.state.agencyname} onChange={this.handleChange.bind(this,"agencyname") }/>

                    </p>
                    <p>
                        <input type='text' name='phonenum' id='phonenum' placeholder={this.state.phonenumError} value={this.state.phonenum} className={this.state.phonenumStyle} value={this.state.phonenum} onChange={this.handleChange.bind(this,"phonenum")} />
                    </p>
                    <p>
                        <input type='text' name='verifycode' id='verifycode' style={{width:"240px"}} placeholder={this.state.verifycodeError} className={this.state.verifycodeStyle}  onChange={this.handleChange.bind(this,"verifycode")} />
                        <input type="button"   value={this.state.btntxt} style={{width:"150px",height:"40px",marginLeft:"10px",borderRadius:'5px'}} className={this.state.btnstyle} disabled={this.state.btndisable} onClick={this.clickHandle} />

                    </p>
                    <p>
                        <input type='text' name='email'  id='email' placeholder={this.state.emailError} className={this.state.emailStyle}  value={this.state.email} onChange={this.handleChange.bind(this,"email")} />

                    </p>
                    <p>
                        <input type='text' name='qq' id='qq' placeholder="QQ号码" value={this.state.qq} onChange={this.handleChange.bind(this,"qq")} />
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