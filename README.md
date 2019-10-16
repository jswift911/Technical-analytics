#### Как развернуть приложение на локальной машине:
Сначала необходимо склонировать проект к себе на компьютер, для этого открываем терминал (в IDE или OS)
```bash
$ git clone https://github.com/AlexeyKobevko/Technical-analytics.git
```
Далее в териминале переходим в корень проекта и запускаем установку зависимостей:
```bash
$ npm i
```
После скачивания пакетов необходимо запустить скрипт, который соберёт приложение и запустит его на локальном дев-сервере:
```bash
$ npm start
``` 

#### Описание API:
Сервер доступен по адресу [https://arcane-eyrie-30150.herokuapp.com](https://arcane-eyrie-30150.herokuapp.com)

Ко всем запросам обязателен заголовок __Content-Type application/json__.

Ко всем запросам, кроме __POST /user__ и __POST /auth__ обязателен заголовок __Authorization Bearer + token__.

Ко всем __POST__ запросам обязателен заголовок __'content-type': 'application/x-www-form-urlencoded'__.
Соответственно рекомендую данные передавать через экземпляр __new URLSearchParams__, например:
```javascript
const params = new URLSearchParams;
params.append('email', username);
params.append('password', password);
params.append('firstName', firstName);
params.append('lastName', lastName);
params.append('organization', organization);

axios.post(endpoints.user, params, {
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
})
    .then(response => {
        console.log(response);
        const { data } = response;
        dispatch(dataRecieved(data));
    })
    .catch(error => dispatch(errorOccured(error)));
    };
```

* Регистрация нового пользователя _POST /user_: 

  В body запроса необходимо передать данные типа
```json
{
    "firstName": "Keka",
    "lastName": "Keka",
    "email": "keka@keka.com",
    "password": "qwerty",
    "organization": "home"
}
```
   Если всё верно, то получите ответ такого плана
```json
{
    "status": "ok",
    "message": {
        "id": "5da0b7c7b5b1660004e96c84",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtla2FAa2VrYS5jb20iLCJpYXQiOjE1NzA4MTM4OTV9.MOKKHBpSAzqvit2Q2ddlqKky8QiBw3nCoylS_bTRRGc"
    }
}
```
   В противном случае получим одну из подобных ошибок
```json
{
    "status": "error",
    "message": "Поле электронная почта обязательно для заполнения"
}
```

* Авторизация пользователя по логину и паролю _POST /auth_: 

  В body запроса необходимо передать данные типа
```json
{
    "email": "keka@keka.com",
    "password": "qwerty"
}
```

   Если всё верно, то получите ответ такого плана
```json
{
    "status": "ok",
    "message": {
        "id": "5da0b7c7b5b1660004e96c84",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtla2FAa2VrYS5jb20iLCJpYXQiOjE1NzA4MTM4OTV9.MOKKHBpSAzqvit2Q2ddlqKky8QiBw3nCoylS_bTRRGc"
    }
}
```
   В противном случае получим одну из подобных ошибок
```json
{
    "status": "error",
    "message": "Пароли не совпадают"
}
```
