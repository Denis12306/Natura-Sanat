import {
    Home,
    BookOpen,
    Newspaper,
    Users,
    Info,
    Leaf
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "../../styles/sidebar.css";

export default function Sidebar() {

    return (

        <aside className="sidebar">

            <div className="logo">

                <Leaf size={42} />

                <div>

                    <h2>NATURA</h2>

                    <h2>SANAT</h2>

                </div>

            </div>

            <nav>

                <NavLink to="/">

                    <Home size={18}/>

                    Accueil

                </NavLink>

                <NavLink to="/articles">

                    <Newspaper size={18}/>

                    Articles

                </NavLink>

                <NavLink to="/courses">

                    <BookOpen size={18}/>

                    Cours

                </NavLink>

                <NavLink to="/professionals">

                    <Users size={18}/>

                    Naturopathes

                </NavLink>

                <NavLink to="/about">

                    <Info size={18}/>

                    A propos

                </NavLink>

            </nav>

            <div className="sidebar-card">

                <h3>

                    Devenez
                    naturopathe

                </h3>

                <p>

                    Partagez vos connaissances
                    et aidez les autres.

                </p>

                <button>

                    En savoir plus

                </button>

            </div>

        </aside>

    );

}
