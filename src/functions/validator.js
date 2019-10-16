export function validator(obj) {
    const regExp = /(^\w.*@\w+\.\w)/;
    for (let key in obj) {
        if (obj[key].length === 0) {
            this.setState({
                error: true,
                errorText: `Поле ${key} обязательно для заполнения`,
            });
            return false;
        }

        if (obj[key] && key === 'username' && !regExp.test(obj[key])) {
            this.setState({
                error: true,
                errorText: 'Невалидный email',
            });
            return false;
        }
        if (obj[key] && key === 'password' && obj[key].length < 6) {
            this.setState({
                error: true,
                errorText: 'Пароль должен быть длиннее 6-ти символов',
            });
            return false;
        }
        if (obj[key] && key === 'repeatPassword' && obj['password'] !== obj['repeatPassword']) {
            this.setState({
                error: true,
                errorText: 'Пароли не совпадают',
            });
            return false;
        }
    }
    return true;
}