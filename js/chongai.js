/**
 * Created by bjwsl-001 on 2016/12/12.
 */
var app = angular.module('chongai', ['ng', 'ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/main', {
            templateUrl: 'tpl/main.html',
            controller: 'mainCtrl'
        })
        .when('/register', {
            templateUrl: 'tpl/register.html',
            controller: 'registerCtrl'
        })
        .when('/strat', {
            templateUrl: 'tpl/strat.html',
            controller: 'stratCtrl'
        })
        .when('/about', {
            templateUrl: 'tpl/about.html',
            controller: 'aboutCtrl'
        })
        .when('/services', {
            templateUrl: 'tpl/services.html',
            controller: 'servicesCtrl'
        })
        .when('/shop', {
            templateUrl: 'tpl/shop.html',
            controller: 'shopCtrl'
        })
        .when('/BBS', {
            templateUrl: 'tpl/BBS.html',
            controller: 'BBSCtrl'
        })
        .when('/contact', {
            templateUrl: 'tpl/contact.html',
            controller: 'contactCtrl'
        })
        .when('/BBS_detail', {
            templateUrl: 'tpl/BBS_detail.html',
            controller: 'BBS_detailCtrl'
        })
        .when('/msg', {
            templateUrl: 'tpl/msg.html',
            controller: 'msgCtrl'
        })
        //.when('/detail',{
        //    templateUrl:'tpl/detail.html'
        //})
        //.when('/detail/:did',{
        //    templateUrl:'tpl/detail.html',
        //    controller:'detailCtrl'
        //})
        .otherwise({redirectTo: '/strat'})

});
app.controller('parentCtrl', ['$scope', '$location',
    function ($scope, $location) {

        $scope.jump = function (arg) {
            $location.path(arg);
        };

        $scope.showLogin = function () {
            $(".login-bg").css('display','block');
            $(".login").animate({height:"460px"});
        };
        $scope.closeLogin=function(){
            $(".login").animate({height:"0px"},500,function(){
                $(".login-bg").css('display','none')
            });
        };
        $scope.headeradd=function(){
            $("#top_menu").slideToggle("fast");
        };
    }
]);


app.controller('stratCtrl', ['$scope',
    function ($scope) {

    }
    ]);

app.controller('mainCtrl', ['$scope',
    function ($scope) {

        $('#slider').nivoSlider();//启动轮播
    }
]);

app.controller('registerCtrl', ['$scope',
    function ($scope) {
        register_uname.onblur = function(){

            if(this.validity.valueMissing){
                var msg = '用户名不能为空！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else if(this.validity.tooShort){
                var msg = '用户名不能少于4位！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else if(this.validity.tooLong){
                var msg = '用户名不能大于9位！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else{
                this.nextElementSibling.innerHTML = '用户名输入合法';
                this.nextElementSibling.className = 'help-block succ-msg';
                this.setCustomValidity('');
            }
            $.ajax({
                url: 'data/pet_regist_select.php',
                type: 'post',//提交的方式
                data: {"register-uname":$("#register_uname").val()},
                success: function(data) {
                    if(data.code===4){
                        var err_msg = '用户名已被使用！';
                        register_uname.nextElementSibling.innerHTML = err_msg;
                        register_uname.nextElementSibling.className = 'help-block err-msg';
                        register_uname.setCustomValidity(err_msg);
                    }
                }});
        };

        register_upwd1.onblur = function(){
            if(this.validity.valueMissing){
                var msg = '密码不能为空！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else if(this.validity.tooShort){
                var msg = '密码不能少于6位！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else if(this.validity.tooLong){
                var msg = '密码不能大于20位！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else{
                this.nextElementSibling.innerHTML = '密码输入合法';
                this.nextElementSibling.className = 'help-block succ-msg';
                this.setCustomValidity('');
            }
            if(register_upwd2.validity.valueMissing) {
                var msg = '密码不能为空！';
                register_upwd2.nextElementSibling.innerHTML = msg;
                register_upwd2.nextElementSibling.className = 'help-block err-msg';
                register_upwd2.setCustomValidity(msg);
            }else if(register_upwd2.value!=$('#register_upwd1').val()&&register_upwd2.value!=""){
                    var msg = '两次密码输入不一致！';
                register_upwd2.nextElementSibling.innerHTML = msg;
                register_upwd2.nextElementSibling.className = 'help-block err-msg';
                register_upwd2.setCustomValidity(msg);
                }else{
                register_upwd2.nextElementSibling.innerHTML = '密码输入合法';
                register_upwd2.nextElementSibling.className = 'help-block succ-msg';
                register_upwd2.setCustomValidity('');
            }
        };
        register_upwd2.onblur = function(){
            if(this.validity.valueMissing){
                var msg = '密码不能为空！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else if(this.validity.tooShort){
                var msg = '密码不能少于6位！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else if(this.validity.tooLong){
                var msg = '密码不能大于20位！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else if(this.value!=$('#register_upwd1').val()){
                var msg = '两次密码输入不一致！';
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = 'help-block err-msg';
                this.setCustomValidity(msg);
            }else{
                this.nextElementSibling.innerHTML = '密码输入合法';
                this.nextElementSibling.className = 'help-block succ-msg';
                this.setCustomValidity('');
            }
        };
        $("#FWxieyi").on("change", function(){
            if(this.checked){
                $('#register-btn').removeAttr("disabled")
            }else{
                document.getElementById("register-btn").setAttribute("disabled","false")
            }
        });
        $("#register-btn").on("click",function(){
            if($("#register-form")[0].checkValidity()){
            var uname=$('[name="register-uname"]').val();
            $.ajax({
                url: 'data/pet_regist.php',
                type: 'POST',//提交的方式
                dataType:'json',
                data: $("#register-form").serializeArray(),
                success: function(msg) {
                    var html="";
                    html=`
                    <div class='well' style="margin-bottom: 200px">
                        <h2 style="color:#5CB85C ;font-weight: bold">
                            注册成功!您是我们的第 532564${msg.userId} 位用户。5秒后跳转到首页。点击
                    <a href="#/main">立即跳转</a>
                        </h2>
                    </div>
                    `
                    $('.register-form').html(html);
                    //这是成功返回的数据，写自己的逻辑
                    $('.welcome ').html('欢迎回来：<a class="a_style">'+uname+'</a> <a class="remove-login a_style">[退出登录]</a>');
                    //loginName = uname; //把登录用户名保存到全局
                    sessionStorage.setItem('LoginName', uname);
                    $('.login-div').html("");
                    setTimeout(function(){
                        window.location.href="#/main";
                    },5000);
                }
            });
            return false;
            }
        });

    }
]);

app.controller('aboutCtrl', ['$scope',
    function ($scope) {

    }
]);

app.controller('BBSCtrl', ['$scope',
    function ($scope) {

    }
]);

app.controller('servicesCtrl', ['$scope',
    function ($scope) {

    }
]);

app.controller('shopCtrl', ['$scope','$http',
    function ($scope,$http) {
        $http.get('data/shop_nav_select.php')
            .success(function (data) {
                $scope.shop_nav_list = data;
            });


        $scope.hasMore = true;

        $http.get('data/shop_getpic.php')
            .success(function (data) {
                $scope.list = data;
            });

        $scope.loadMore = function () {

            $http.get('data/shop_getpic.php?start='+$scope.list.length)
                .success(function (data) {
                    $scope.list=$scope.list.concat(data);
                    if(data.length < 5)
                    {
                        $scope.hasMore = false;
                    }
                });

        };
        //ng-click="swipebox($event)"


        $scope.swipebox= function($event){
            $event.preventDefault();
                console.log("111");
            console.log( angular.element(".swipebox"));
            angular.element(".swipebox").swipebox();
            //jQuery.swipebox;
        };


    }
]);
app.controller('contactCtrl', ['$scope',
    function ($scope) {

    }
]);
app.controller('BBS_detailCtrl', ['$scope',
    function ($scope) {

    }
]);
app.controller('msgCtrl', ['$scope',
    function ($scope) {

    }
]);
