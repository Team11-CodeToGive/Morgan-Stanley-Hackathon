import Cookies from 'js-cookie';
import { navigate } from 'astro:transitions/client';

export function logout() {
    Cookies.remove('email');
    Cookies.remove('password');
    Cookies.remove('name');
    navigate('/login-signup');
}

export function getUserName() {
    return Cookies.get('name');
}

export function login() {

}

export function isLoggedIn() {
    console.log('Cookies.get(email): ', Cookies.get('email'));
    return Cookies.get('email') && Cookies.get('password');
}