import React from "react";
import { useState } from "react";
import { Notification, Schedule } from "../components/app-components";
import NavItem from "../components/app-components/nav-item/NavItem";
import { Header } from "../components/header-components";

const Home = () => {
    const [pageId, setPageId] = useState(0)
    const navList = [
        {
            id: 0,
            icon: <i class="fa-regular fa-calendar"></i>,
            onClick: () => {setPageId(0)}
        },

        {
            id: 1,
            icon: <i class="fa-solid fa-table"></i>,
            onClick: () => {setPageId(1)}
        },

        {
            id: 2,
            icon: <i class="fa-solid fa-list"></i>,
            onClick: () => {setPageId(2)}
        },

        {
            id: 4,
            icon: <i class="fa-solid fa-envelope"></i>,
            onClick: () => {setPageId(3)}
        },

        {
            id: 5,
            icon: <i class="fa-solid fa-gear"></i>,
            onClick: () => {setPageId(4)}
        }
    ]

    const renderPage = (pageId) => {
        switch(pageId) {
            case 0: {
                return <Schedule/>
            }
            
            default: return <Notification/>
        }
    }

    return (
        <>
            <Header/>
            <div className="app-container" style={{display: "flex", width: "100%", boxSizing: "border-box"}}>
                <div className="navigation" style={{maxWidth:"60px", minHeight:"700px", backgroundColor:"#4C6ED7"}}>
                    <div className="navigation__bar" style={{marginTop: "50px"}}>
                    {
                        navList.map((item, index) => {
                            return (
                                <NavItem
                                    key={index} 
                                    icon={item.icon} 
                                    active={pageId===index?true:false} 
                                    onClick={item.onClick}
                                />
                            )
                        })
                    }
                    </div>
                </div>
                {
                    renderPage(pageId)
                }
            </div>
        </>
    )
}

export default Home