import "./chat.css"
import user from "../../assets/user.jpg";
import c1 from "../../assets/c1 copy.png";

export const Leftside = () => {
    return (
        <div class="leftside">
            <div class="header">
                <div class="userimg">
                    <img src={c1} class="cover" />
                </div>
                <ul class="nav_icons">
                    <li><ion-icon name="chatbox"></ion-icon></li>
                    <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                </ul>
            </div>
            <div class="chatlist">
                <div class="block active">
                    <div class="imgbx">
                        <img src={user} class="cover" />
                    </div>
                    <div class="details">
                        <div class="listhead">
                            <h4>Ramesh Babu</h4>
                            <p class="time">10:56</p>
                        </div>
                        <div class="message_p">
                            <p>Poi padi da dai hello pa dai enna da dai dash</p>
                        </div>
                    </div>
                </div>
                <div class="block unread">
                    <div class="imgbx">
                        <img src={user} class="cover" />
                    </div>
                    <div class="details">
                        <div class="listhead">
                            <h4>Tharun</h4>
                            <p class="time">09:25</p>
                        </div>
                        <div class="message_p">
                            <p>Future IAS Officer</p>
                            <b>1</b>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgbx">
                        <img src={user} class="cover" />
                    </div>
                    <div class="details">
                        <div class="listhead">
                            <h4>Sachjith</h4>
                            <p class="time">01:21</p>
                        </div>
                        <div class="message_p">
                            <p>I dont know da</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgbx">
                        <img src={user} class="cover" />
                    </div>
                    <div class="details">
                        <div class="listhead">
                            <h4>Ankit</h4>
                            <p class="time">23/10/2023</p>
                        </div>
                        <div class="message_p">
                            <p>How will I know da</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgbx">
                        <img src={user} class="cover" />
                    </div>
                    <div class="details">
                        <div class="listhead">
                            <h4>Bhuvaneshwar</h4>
                            <p class="time">23/10/2023</p>
                        </div>
                        <div class="message_p">
                            <p>Hi da when is sanjay coming</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgbx">
                        <img src={user} class="cover" />
                    </div>
                    <div class="details">
                        <div class="listhead">
                            <h4>Bhuvaneshwar</h4>
                            <p class="time">23/10/2023</p>
                        </div>
                        <div class="message_p">
                            <p>Hi da when is sanjay coming</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}