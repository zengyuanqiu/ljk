(function($, owner){  
//***** 强制打开软键盘  Begin******  
    var _softKeyboardwebView, _imm, _InputMethodManager, _isKeyboardInited = false;  
    // 打开软键盘  
    owner.initSoftKeyboard = function() {  
        if (mui.os.ios) {  
            _softKeyboardwebView = plus.webview.currentWebview().nativeInstanceObject();  
        } else {  
            _softKeyboardwebView = plus.android.currentWebview();  
            plus.android.importClass(_softKeyboardwebView);  
            _softKeyboardwebView.requestFocus();  
            var Context = plus.android.importClass("android.content.Context");  
            _InputMethodManager = plus.android.importClass("android.view.inputmethod.InputMethodManager");  
            var main = plus.android.runtimeMainActivity();  
            _imm = main.getSystemService(Context.INPUT_METHOD_SERVICE);  
        }  
        _isKeyboardInited = true;  
    }  
  
    // 打开软键盘  
    owner.openSoftKeyboard = function() {  
        if (!_isKeyboardInited) {  
            owner.initSoftKeyboard();  
        }  
        if (mui.os.ios) {  
            _softKeyboardwebView.plusCallMethod({  
                "setKeyboardDisplayRequiresUserAction": false  
            });  
        } else {  
            _imm.toggleSoftInput(0, _InputMethodManager.SHOW_FORCED);  
        }  
    }  
  
    // 控件获得焦点并弹出软键盘  
       // input：需要获得焦点的控件  
        owner.focusAndOpenKeyboard = function(input) {  
        setTimeout(function() {  
            input.focus();  
            owner.openSoftKeyboard();  
        }, 200);  
    }  
  
//***** 强制打开软键盘  End******  
}(mui, window.NativeUtil={}))  