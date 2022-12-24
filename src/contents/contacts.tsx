import { ContactModel } from "../models/contactsModel";
import facebook from "../assets/svg/facebook.svg"
import instagram from '../assets/svg/instagram.svg'
import github from '../assets/svg/github.svg'
import linkedin from '../assets/svg/linkedin.svg'

export const contactList: ContactModel[] = [
    {
        contactLink: "https://www.facebook.com/profile.php?id=100013348872340",
        icon: facebook
    },
    {
        contactLink: "https://www.linkedin.com/in/ân-bùi-842875235",
        icon: linkedin
    },
    {
        contactLink: "https://www.instagram.com/quangan186/",
        icon: instagram
    },
    {
        contactLink: "https://github.com/quangan186",
        icon: github
    }
]