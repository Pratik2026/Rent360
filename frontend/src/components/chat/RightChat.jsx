// import "./chat.css"
import user from "../../assets/user.jpg";

export const Rightside = () => {
    return (
        <div class="rightside">
            <div class="header">
                <div class="imgtext">
                    <div class="userimg">
                        <img src={user} class="cover" />
                    </div>
                    <h4>Ramesh Babu<span>Online</span></h4>
                </div>
                <ul class="nav_icons">
                    <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                </ul>
            </div>
            <div class="chatbox">
                <div class="message my_msg">
                    <p>Hi<span>12:15</span></p>
                </div>
                <div class="message frnd_msg">
                    <p>Hello<span>12:15</span></p>
                </div>
                <div class="message frnd_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugit repellendus quaerat odit incidunt esse<span>12:15</span></p>
                </div>
                <div class="message frnd_msg">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis repellat cum mollitia repellendus eligendi voluptate perferendis, nam nihil officiis, nobis repudiandae consequatur dolorem! Aspernatur nisi ea quibusdam doloribus molestiae, hic odit eos<span>12:15</span></p>
                </div>
                <div class="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore reprehenderit hic nam maxime tenetur repudiandae. Voluptatem, eos similique?</p>
                </div>

            </div>
            <div class="chatbox_inp">
                <ion-icon name="happy-outline"></ion-icon>
                <ion-icon name="attach-outline"></ion-icon>
                <input type="text" placeholder="Type a message" />
                <ion-icon name="send-outline"></ion-icon>
            </div>
        </div>
    )
}