import React, { useLayoutEffect, useRef } from 'react'
import  bg from '../assets/lacasa.svg'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function ScrollBg() {
    const bg1 = useRef(null);
    const img_container = useRef(null);
    const img = useRef(null);
    const text1 = useRef(null);
    const container = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                pinSpacing: false,
                start: "top top",
                endTrigger: ".last",
                end: "bottom bottom",
            });
            gsap.set(container.current, {marginTop: -container.current.offsetHeight,
                
            })
            gsap.timeline({
                scrollTrigger: {
                    trigger: img_container.current,
                    pin: img_container.current,
                    scrub: 1,
                    start: "0% 0%",
                }
            })
            .to(img.current, {transform: "translateZ(2200px)"}, 0)
            .to(text1.current, {y:-800}, 0.05, "<")
            .fromTo(
                container.current, {yPercent:100, scaleY:2}, 
                {yPercent:0, scaleY:1})
        })
        return () => ctx.revert();
    }, [])
    return (
        <div className='relative'>
            <div ref={bg1} className="bg bg-[#000] absolute h-screen w-screen z-[-1]"></div>
            <section>
                <div ref={img_container} className='img-container perspective flex flex-col justify-center items-center h-screen w-screen'>
                    <h1 ref={text1} className='font-netflix font-medium tracking-tight leading-tight text-[3.5rem] absolute top-20 z-50 scale-150 text-[#db0c26] shadow-md'>HACK O' CLOCK</h1>
                    <img ref={img} className='image' src={bg} alt="" />
                </div>
                <div ref={container} className="container">
                    <div className="col-1">
                        <p>First column content</p>
                        <p>First column content2</p>
                    </div>
                    <div className="col-2">
                        <p>Second column content</p>
                        <p className='last'>Second column content2</p>
                    </div>
                </div>
            </section>
        
        </div>
    )
}

export default ScrollBg
