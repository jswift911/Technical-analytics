export function validator(obj) {
    const regExpMail = /(^\w.*@\w+\.\w)/;
    const regExpPhone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    for (let key in obj) {
        if (obj[key].length === 0) {
            this.setState({
                error: true,
                errorText: `Поле ${key} обязательно для заполнения`,
            });
            return false;
        }

        if (obj[key] && key === 'email' && !regExpMail.test(obj[key])) {
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
        if (obj[key] && key === 'phone' && !regExpPhone.test(obj[key])) {
            this.setState({
                error: true,
                errorText: 'Неверно указан номер телефона',
            });
            return false;
        }
    }
    return true;
}