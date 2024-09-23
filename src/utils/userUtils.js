import Cookies from 'js-cookie';
import { navigate } from 'astro:transitions/client';

export function logout() {
    Cookies.remove('email');
    Cookies.remove('password');
    Cookies.remove('user');
    navigate('/login-signup');
}

export function login() {

}

export function isLoggedIn() {

}