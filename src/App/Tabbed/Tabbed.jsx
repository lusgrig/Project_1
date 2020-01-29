import React, {useState} from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image:'../img/MissionVision/about.jpg',
        title: 'One',
        text: 'This is content one'
    },
    {
        image:'../img/MissionVision/mission.jpg',
        title: 'Two',
        text: 'This is content two'
    },
    {
        image:'../img/MissionVision/vision.jpg',
        title: 'Three',
        text: 'This is content three'
    },
];


const Tabbed = () => {
    const [currentTab, setCurrentTab] = useState(tabItems[0]);
    return(
        <div className={'Tabbed'}>
            <div className="tabs">
                <div tabindex="1" onClick={()=> {setCurrentTab(tabItems[0])}} className = "tab">One </div>
                <div tabindex="2" onClick={()=> {setCurrentTab(tabItems[1])}} className = "tab">Two</div>
                <div tabindex="3" onClick={()=> {setCurrentTab(tabItems[2])}} className = "tab">Three</div>
            </div>
            <div className="content">
                <img src={currentTab.image} alt=""/>
                <h2>{currentTab.title}</h2>
                <p>{currentTab.text}</p>
                
             </div>


            
        </div>


        
    )
}

export default Tabbed;
