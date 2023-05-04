export type PostType = {
    id: number,
    message: string,
    likes: number
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    website: string,
    youtube: string,
    mainlink: string
}

export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType
    photos: PhotosType
}

export type PhotosType = {
    small: string | null,
    large: string | null
}

export type UserDataType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}