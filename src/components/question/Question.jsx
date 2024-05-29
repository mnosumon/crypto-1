import React, { useState } from 'react'
import './question.css'
import faqBackground from '../../assets/images/accordian.png'
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';

const Question = () => {
    let accordion = [
        {
            title: "What kind of data can I see in FieldX?",
            content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        },
        {
            title: "Does Bizzy read my customers' data?",
            content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        },
        {
            title: "What's your refund and cancellation policy?",
            content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        },
        {
            title: "How do you take payments?",
            content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        },
        {
            title: "Can I also track website analytics on fieldX?",
            content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        },
        {
            title: "What makes Bizzy different from other analytics tools?",
            content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        },
    ]
    let [activeAccordion, setActiveAccordion] = useState(0)

    let handleClick = (index)=>{
        setActiveAccordion(activeAccordion === index ? null : index)
    }

    // let [datas, setdatas] = useState(false)
    // let data = ()=>{
    //     setdatas(!datas)
    // }
    // let [bizzRead, setbizzRead] = useState(false)
    // let bizzyRead = ()=>{
    //     setbizzRead(!bizzRead)
    // }
    // let [refunded, setrefunded] = useState(false)
    // let refund = ()=>{
    //     setrefunded(!refunded)
    // }
    // let [payment, setpayment] = useState(false)
    // let payMent = ()=>{
    //     setpayment(!payment)
    // }
    // let [analytics, setanalytics] = useState(false)
    // let anaLytics = ()=>{
    //     setanalytics(!analytics)
    // }
    // let [makes, setmakes] = useState(false)
    // let makeS = ()=>{
    //     setmakes(!makes)
    // }
  return (
    <>
        <section id='faq' style={{backgroundImage: `url(${faqBackground})`}}>
            <div className="container">
                <div className="faq_title">
                    <span>Common Question </span>
                    <h3>Frequently asked questions</h3>
                </div>
                <div className="faq_question">
                <div className="faq_left">
                {
                        accordion.map((item, index)=>(
                            index <=2 &&
                            <div key={index} className="accordianItem">
                                <div className="accordianTitle">
                                    <div className="heading">
                                        <h5 className=''>{item.title}</h5>
                                    </div>
                                    <div onClick={()=>handleClick(index)} className="accordianIcon">
                                        {
                                            activeAccordion === index ?<FaAngleDown/>:<FaAngleRight/>
                                        }
                                    </div>
                                </div>
                                {
                                    activeAccordion === index &&
                                    <p className=''>{item.content}</p>
                                }
                            </div>
                        ))
                    }

                </div>
                <div className="faq_riht">
                {
                        accordion.map((item, index)=>(
                            index >= 3 &&
                            <div key={index} className="accordianItem">
                                <div className="accordianTitle">
                                    <div className="heading">
                                        <h5 className=''>{item.title}</h5>
                                    </div>
                                    <div onClick={()=>handleClick(index)} className="accordianIcon">
                                        {
                                            activeAccordion === index ?<FaAngleDown/>:<FaAngleRight/>
                                        }
                                    </div>
                                </div>
                                {
                                    activeAccordion === index &&
                                    <p className=''>{item.content}</p>
                                }
                            </div>
                        ))
                    }

                </div>

                    {/* <div className="accordian">
                        <div className="accordianItem">
                            <div className="accordianTitle">
                                <div className="heading">
                                    <h5 onClick={bizzyRead} className=''>Does Bizzy read my customers' data?</h5>
                                </div>
                                <div className="accordianIcon">
                                    {
                                        bizzRead
                                        ?
                                        <FaAngleDown onClick={bizzyRead}/>
                                        :
                                        <FaAngleRight onClick={bizzyRead} />
                                    }
                                </div>
                            </div>
                            {
                                bizzRead &&
                                <p className=''>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            }
                        </div>
                        <div className="accordianItem">
                            <div className="accordianTitle">
                                <div className="heading">
                                    <h5 onClick={refund} className=''>What kind of data can I see in FieldX?</h5>
                                </div>
                                <div className="accordianIcon">
                                    {
                                        refunded
                                        ?
                                        <FaAngleDown onClick={refund}/>
                                        :
                                        <FaAngleRight onClick={refund} />
                                    }
                                </div>
                            </div>
                            {
                                refunded &&
                                <p className=''>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            }
                        </div>
                    </div> */}
                    {/* <div className="accordian">
                        <div className="accordianItem">
                            <div className="accordianTitle">
                                <div className="heading">
                                    <h5 onClick={payMent} className=''>What kind of data can I see in FieldX?</h5>
                                </div>
                                <div className="accordianIcon">
                                    {
                                        payment
                                        ?
                                        <FaAngleDown onClick={payMent}/>
                                        :
                                        <FaAngleRight onClick={payMent} />
                                    }
                                </div>
                            </div>
                            {
                                payment &&
                                <p className=''>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            }
                        </div>
                        <div className="accordianItem">
                            <div className="accordianTitle">
                                <div className="heading">
                                    <h5 onClick={anaLytics} className=''>What kind of data can I see in FieldX?</h5>
                                </div>
                                <div className="accordianIcon">
                                    {
                                        analytics
                                        ?
                                        <FaAngleDown onClick={anaLytics}/>
                                        :
                                        <FaAngleRight onClick={anaLytics} />
                                    }
                                </div>
                            </div>
                            {
                                analytics &&
                                <p className=''>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            }
                        </div>
                        <div className="accordianItem">
                            <div className="accordianTitle">
                                <div className="heading">
                                    <h5 onClick={makeS} className=''>What kind of data can I see in FieldX?</h5>
                                </div>
                                <div className="accordianIcon">
                                    {
                                        makes
                                        ?
                                        <FaAngleDown onClick={makeS}/>
                                        :
                                        <FaAngleRight onClick={makeS} />
                                    }
                                </div>
                            </div>
                            {
                                makes &&
                                <p className=''>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            }
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Question