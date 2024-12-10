import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

const content = [
    { name: "🍎 Apple", description: "A sweet, crunchy fruit often red or green." },
    { name: "🚗 Car", description: "A vehicle with four wheels for transportation." },
    { name: "💻 Laptop", description: "A portable computer used for work and entertainment." },
    { name: "🎸 Guitar", description: "A stringed musical instrument for playing melodies." },
    { name: "📚 Book", description: "A set of written pages, often telling a story or providing information." },
];

const App = () => {
    const [show, setShow] = useState(true);
    const [data, setData] = useState(content);
    
    return (
        <div className="box">
            <div className='items'>
                <AnimatePresence mode="popLayout">
                    {
                        data.slice(0, show ? data.length : 1).map((item, index) => {
                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={item.name}
                                    className="item"
                                >
                                    <button type="button" onClick={() => setData(prev => prev.filter(i => i.name !== item.name))} className="close_btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </motion.div>
                            )
                        })
                    }
                    <motion.div layout>
                        <button className="show_btn" onClick={() => setShow(!show)}>
                            {
                                show ?
                                    <span>
                                        Show More
                                    </span>
                                    :
                                    <span>
                                        Show Less
                                    </span>
                            }
                        </button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default App
