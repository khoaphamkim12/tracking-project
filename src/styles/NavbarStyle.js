import styled from "styled-components";

export const NavbarStyle = styled.nav`
    .navbar{ 
        transition: 0.2s;
        padding: 8px 20px 6px 30px;
        display: flex;
        justify-content: space-between;
        /* background-color: #fffaaa; */
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        right: 0;
        &.scrolled{
            background-color: #fff;
            box-shadow: 0 3px 10px 0 rgba(22,28,45,.08);
         }
        .nav-container{
            display: block;
        }
        .burger{ 
            display: block;
            margin-top: 2px;
            padding: 0;
            border: none;
            background: transparent;
            svg {
                width: 40px;
                height: 20px;
                fill: rgba(33,37,41,.75);
                stroke: rgba(33,37,41,.75);
            }
        }
        .navbar-left{ 
            .logo{ 
                font-size: 20px;
                font-weight: 800;
            }
        }
        .nav-link-list { 
            margin: 0;
            display: block;
            list-style: none;
            padding-left: 0;
            padding-top: 20px;
            height: 45px;
            overflow:hidden ;
            transition: all .2s;

            &.hide{ 
                height: 0;
                padding-top: 0;
            }
            
            .nav-link { 
                padding:  0;
                .nav-item { 
                text-decoration: none;
                font-weight: 700;
                color: #161c2d;
                transition: 0.2s;
                }
                &:where(:hover,.active) { 
                    .nav-item{ 
                        color: #05bd93;
                    }
                }
            }
        }
        @media (min-width: 768px) {
            padding: 12px 20px 10px 30px;
            .burger{ 
            svg {
                width: 40px;
                height: 20px;
            }
        }

        }
        @media (min-width: 1024px) {
            padding: 15px 100px 15px 100px;
            display: block;
            .nav-link-list{ 
                display: flex;
                flex-direction: row;
                padding-top: 4px;
                height: unset;
                &.hide{ 
                padding-top: 4px;
                }
                .nav-link{ 
                    padding:  0 15px;
                }
                &.hide{ 
                    height: unset;
                }
            }
            .burger{ 
                display: none;
                margin-top: 0px;
            }
            .nav-container{ 
                display: flex; 
                justify-content: space-between;
            }

        }
        @media (min-width: 1280px) {
            padding: 20px 150px;

        }
    } 
`;