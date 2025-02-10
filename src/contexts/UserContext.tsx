import { createContext, useContext } from 'react';

type Address = {
    country: string,
    province: string,
    district: string,
}

type Contacts = {
    email: string,
    facebook: string,
    github: string,
    zalo: string,
}

export type UserData = {
    name: string,
    birth?: string,
    phone?: string | number,
    classRoom: string,
    desc: string,
    avatar?: string,
    contacts: Contacts,
    address?: Address,
};

export const user: UserData = {
    name: 'Le Duc Hieu',
    birth: '1996-10-21',
    phone: '0792966931',
    classRoom: 'C2405L1-ON',
    desc: 'Học hỏi - chăm chỉ - nỗ lực - trách nhiệm. Cái nào khó quá thì ta copy paste.',
    // avatar: '../assets/images/color.png',
    contacts: {
        email: 'https://www.gmail.com',
        facebook: 'https://www.facebook.com/dh.6931',
        github: 'https://www.github.com/rogg6931',
        zalo: 'https://www.zalo.me/0792966931',
    },
    address: {
        country: 'Việt Nam',
        province: 'Tp. Hồ Chí Minh',
        district: 'Bình Tân',
    },
};

export const UserContext = createContext(user);

export const useUser = () => useContext(UserContext);