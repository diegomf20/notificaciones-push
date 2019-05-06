var _key_message="AIzaSyCUpg8GjUxs56rQyDCO_yEu46Vmbxfpapg";

function pushInit(topics) {
    navigator.serviceWorker.register('./sw.js').then((registration) => {
        var messaging;
        messaging=firebase.messaging();
        messaging.useServiceWorker(registration);
        messaging.requestPermission().then(function () {
            return messaging.getToken();
        }).then(function (token) {
            console.log(token);
            if(typeof(Cookies.get('notificaciones-push'))=="undefined"){
                Cookies.set('notificaciones-push',{token: token},{expires: 365});
                addTopics(topics,token);
            }
        });
    });
    listenPush();
}

function addTopics(topics,token) {
    $.ajax({        
        type : 'POST',
        url : "https://iid.googleapis.com/iid/v1:batchAdd",
        headers : {Authorization : 'key=' + _key_message},
        contentType : 'application/json',
        dataType: 'json',
        data: JSON.stringify({"to": "/topics/"+topics, "registration_tokens": [token]}),
        success : function(response) {
            console.log(response);
        },
        error : function(xhr, status, error) {
            console.log(xhr.error);                   
        }
    });
}

function removeTopics(topics) {
    var cookie=JSON.parse(Cookies.get('notificaciones-push'));
    Cookies.remove('notificaciones-push');
    $.ajax({        
        type : 'POST',
        url : "https://iid.googleapis.com/iid/v1:batchRemove",
        headers : {Authorization : 'key=' + _key_message},
        contentType : 'application/json',
        dataType: 'json',
        data: JSON.stringify({"to": "/topics/"+topics, "registration_tokens": [cookie.token]}),
        success : function(response) {
            console.log(response);
        },
        error : function(xhr, status, error) {
            console.log(xhr.error);                   
        }
    });
}
/**
 * Recepcionar mensaje en Primer Plano
 */
function listenPush() {
    const messaging=firebase.messaging();    
    messaging.onMessage(function(payload) {
        Push.create(payload.notification.title, {
            body: payload.notification.body,
            icon: payload.notification.icon,
            timeout: 8000,
            onClick: function () {
                window.open(payload.notification.click_action);
                this.close();
            }
        });
    });
}