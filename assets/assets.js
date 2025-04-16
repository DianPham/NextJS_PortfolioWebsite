import user_image from './user-image.jpg';
import ballet from './ballet.jpg'
import volunteer from './volunteer.jpg'
import bake from './bake.jpg'
import travel from './travel.jpg'
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Giáo viên thực tập',
        description: 'Trường mầm non Măng Non II',
        bgImage: '/work-1.jpg',
    },
    {
        title: 'Giáo viên năng khiếu',
        description: 'Trung tâm BlueKids',
        bgImage: '/work-2.jpg',
    },
    {
        title: 'Trợ giảng kỹ năng sống',
        description: 'Công ty Nhân Trí Dũng',
        bgImage: '/work-3.jpg',
    },
]

export const serviceData = [
    {title: 'Nghệ thuật', description: 'Những hình ảnh về nghệ thuật mình từng tham gia.', link: '', image: ballet},
    {title: 'Thiện nguyện', description: 'Với mình, khi cho đi chính chúng ta cũng đang nhận lại.', link: '', image: volunteer },
    {title: 'Làm bánh', description: 'Con đường ngắn nhất đi đến trái tim là qua đường bao tử, đồ ngọt thì nhanh hơn.', link: '', image: bake},
    {title: 'Du lịch', description: 'Hãy chỉ nhớ những kỷ niệm, và để lại những dấu chân.', link: '', image: travel},
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Giáo dục', description: 'Cử nhân Sư phạm mầm non' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Kỹ năng', description: 'Múa, nhảy, trồng cây, làm bánh,...' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Kinh nghiệm', description: 'Từng được giảng dạy tại nhiều trường mầm non' },
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];