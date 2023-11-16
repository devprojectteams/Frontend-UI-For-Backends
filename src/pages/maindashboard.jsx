<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RecyclPal AdminDashboard</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.mins.css"/>
    <link rel="stylesheet" href="maindashboard.css"/>
</head>
<body>
    
    <div className="sidebar">
        <div className="sidebar-brand">
            <h2><span className="lab la-RecyclpalAdmin"></span> RecyclPal</h2>
        </div>

        <div className="sidebar-menu">
            <ul>
                <li>
                    <a href="" className="active">
                        <span className="las la-igloo"></span>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="">
                        <span className="las la-users"></span>
                        <span>Customers</span>
                    </a>
                </li>


                <li>
                    <a href="">
                        <span className="las la-clipboard-list"></span>
                        <span>Projects</span>
                    </a>
                </li>


                <li>
                    <a href="">
                        <span className="las la-shipping-bag"></span>
                        <span>Orders</span> 
                    </a>
                </li>

                  <li>
                    <a href="">
                        <span className="las la-receipt"></span>
                        <span>Inventory</span> 
                    </a>
                </li>

                  <li>
                    <a href="">
                        <span className="las la-user-circle"></span>
                        <span>Accounts</span> 
                    </a>
                </li>

                  <li>
                    <a href="">
                        <span className="las la-clipboard-list"></span>
                        <span>Tasks</span> 
                    </a>
                </li>
            </ul>
        </div>

        <div className="main-content">
            <header>
            <h2>
               <label htmlFor="">
                <span className="las la-bars"></span>
               </label>
                    Dashboard
                </h2>
                    <div className="search-wrapper">
                    <span className="las la-bars"></span>
                    <input type="search" placeholder="search here" />
                    </div>

                    <div className="user-wrapper">
                        <img src="../assets/images/image1.jpg" 
                        width="40px"  height="40px" alt="" />
                        <div>
                            <h4>John Doe</h4>
                            <small>Super admin</small>
                        </div>
                    </div>
            </header>

            <main>

                <div className="cards">

                    <div className="card-single">
                        <div>
                            <h1>54</h1>
                            <span>Customers</span>
                        </div>
                    <div>
                    <span className="las la-users"></span>
                    </div>
                </div>

                      <div className="card-single">
                        <div>
                            <h1>79 </h1>
                            <span>Projects</span>
                        </div>
                    <div>
                    <span className="las la-clipboard-list"></span>
                    </div>
                </div>

                          <div className="card-single">
                        <div>
                            <h1>124</h1>
                            <span>Orders</span>
                        </div>
                    <div>
                    <span className="las la-shopping-bag"></span>
                    </div>
                </div>

                      <div className="card-single">
                        <div>
                            <h1>$6k</h1>
                            <span>Income</span>
                        </div>
                    <div>
                    <span className="lab la-google-wallet"></span>
                    </div>
                </div>
            </div>

            <div className="recent-grid">
                <div className="project">
                    <div className="card">
                        <div className="card-header">
                            <h3>Recent Projects</h3>

                            <button> See all <span className="las la arrow-right">
                                </span></button>
                    </div>

                    <div className="card-body">
                        <table width="100%">
                        <thead>
                            <tr>
                              <td> Project Title</td>  
                              <td> Department</td>  
                              <td>Status</td>  
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UI/UX Design</td>  
                                <td>UI Team</td>  
                                <td>
                                    <span className="status purple"></span>
                                    review
                                </td> 
                                </tr>   
                                <tr> 
                                    <td>Web deveplopment </td>
                                    <td>Frontend</td>  
                                <td>
                                    <span className="status pink"></span>
                                   in progress
                                </td> 
                            </tr>
                            <tr>
                                <td>Ushop app</td>
                                   <td>Mobile Team</td>  
                                <td>
                                    <span className="status orange"></span>
                                    pending
                                </td> 
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>

                <div className="customers">
                   <div className="card">
                        <div className="card-header">
                            <h3>New customer</h3>

                            <button> See all <span className="las la arrow-right">
                                </span></button>
                    </div>

                    <div className="card-body">
                        <div className="customer">
                          <div>
                            <img src="../assets/images/image2.jpg" width="40px"  
                            height="40px" alt="" />
                        </div>
                        <h4>Lewis S. Cunninham</h4>
                        <small>CEO Excerpt</small>
                    </div>
                </div>
               </div>
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                </div>
            </div>

                    <div className="customer">
                    <div>
                        <img src="../assets/images/image2.jpg" width="40px"  
                            height="40px" alt="" />
                        </div>
                        <h4>Lewis S. Cunninham</h4>
                        <small>CEO Excerpt</small>
                    </div>
                </div>
               </div>
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                </div>
            </div>


        </div>
       </div>
     </div>

        </main>
    </div>
    



</body>
</html>