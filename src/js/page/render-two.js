
/**
 * Created by matrix on 2017/5/26.
 */
    var code ; //��ȫ�ֶ�����֤��

    function createCode(){
        code = "";
        var codeLength = 4;//��֤���ĳ���
        var checkCode = document.getElementById("verify_code");
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z');//������
        for(var i = 0; i < codeLength; i++) {//ѭ������
            var index = Math.floor(Math.random()*36);//ȡ����������������0~35��
            code += random[index];//��������ȡ���������ӵ�code��
        }
        checkCode.value = code;//��codeֵ������֤��
    }
//У����֤��
    function validate(){
        var inputCode = document.getElementById("js_login_verify").value.toUpperCase(); //ȡ����������֤�벢ת��Ϊ��д
        if(inputCode.length <= 0) { //����������֤�볤��Ϊ0
            alert("С�����㻹û����֤�룡"); //�򵯳���������֤��
        }else if(inputCode != code ) { //����������֤������������֤�벻һ��ʱ
            alert("�װ��ģ���֤��������~"); //�򵯳���֤����������
            createCode();//ˢ����֤��
            document.getElementById("js_login_verify").value = "";//�����ı���
        }else { //������ȷʱ
            alert("������ȷ�� ֥�鿪��~~");
        }
    }

            window.onload=function(){
                createCode();
            }
            var login_btn = document.getElementById('login_btn');
            var v = document.getElementById('login_verify_div');
            function cc(){
                login_btn.onclick=function () {
                    validate();
                }
            }
            function noverify() {

                if(v.style.display=="none"){
                    v.style.display="block";
                    cc();
                }else {
                    v.style.display="none";

                }
            }
