export function validator(str, name) {
    const regExp = /(^\w.*@\w+\.\w)/;
//TODO выровнять по центру текст ошибки
    if (!str) {
        this.setState({
            error: true,
            errorText: `Поле ${name} обязательно для заполнения`,
        });
        return false;
    }
    if (str && name === 'email' && !regExp.test(str)) {
        this.setState({
            error: true,
            errorText: 'Невалидный email',
        });
        return false;
    }
    if (str && name === 'email' && regExp.test(str)) {
        this.setState({
            error: false,
            errorText: '',
        });
        return true;
    }
    if (str && name === 'password' && str.length < 6) {
        this.setState({
            error: true,
            errorText: 'Пароль должен быть длиннее 6-ти символов',
        });
        return false;
    }

    return true;
}

export function validatorObj(obj) {
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