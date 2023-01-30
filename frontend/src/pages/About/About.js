import React from 'react'
import sagnik from './sagnik.jpg';
import lakshit from './lakshit.jpeg';
import mihir from './mihir.jpeg';
import prashant from './prashant.jpeg';
import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading" style={{color:"black"}}>About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    We created this as a Major project, and We have also deployed this project
                    so people can use it and mainly the developers can who are learning AI can learn 
                    from this project and make their own AI or they can also improve in this project.
                    This is an open source project, The code is available on the <a href="https://github.com/Rambo8390/YogaFit" style={{color:"black"}}>GitHub</a>. 
                    
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). I have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    I have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                
                <div className="developer-info">
                    <h4 style={{color:"black"}}>About Team Members</h4>
                    <p className="about-content">
                        <div className='about-image-container'>
                            <div className='about-image'>
                                <img style={{height:"110px",width:"100px"}} src={sagnik}></img>
                                <p style={{fontSize:"15px",color:"black",fontWeight:"600"}}>SAGNIK PURKAIT</p>
                            </div>
                            <div className='about-image'>
                            <img style={{height:"110px",width:"100px"}} src={mihir}></img>
                                <p style={{fontSize:"15px",color:"black",fontWeight:"600"}}>MIHIR SANE</p>
                            </div>
                            <div className='about-image'>
                            <img style={{height:"110px",width:"100px"}} src={lakshit}></img>
                                <p style={{fontSize:"15px",color:"black",fontWeight:"600"}}>LAKSHIT SHAH</p>
                            </div>
                            <div className='about-image'>
                            <img style={{height:"110px",width:"100px"}} src={prashant}></img>
                                <p style={{fontSize:"15px",color:"black",fontWeight:"600"}}>PRASANT SAW</p>
                            </div>
                        </div>
                        
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
