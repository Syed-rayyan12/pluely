"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What is Pluely and how does it work?",
        answer: "Pluely is an invisible AI assistant that operates with complete stealth during meetings, interviews, and presentations. It uses a translucent overlay that's undetectable in video calls, screen shares, and recordings."
    },
    {
        question: "Is Pluely really invisible in screen recordings?",
        answer: "Yes, Pluely's overlay window is designed to be completely invisible in video calls, screen shares, and recordings on platforms like Zoom, Google Meet, Microsoft Teams, and Slack Huddles."
    },
    {
        question: "Which AI providers does Pluely support?",
        answer: "Pluely supports all major AI providers including OpenAI, Anthropic, Google, xAI, Mistral, Cohere, Perplexity, Groq, Ollama, or your own custom endpoint. You can switch providers anytime without losing your chat history."
    },
    {
        question: "What platforms is Pluely available on?",
        answer: "Pluely works seamlessly across Windows, macOS, and Linux, providing a consistent experience across all your devices and workflows."
    },
    {
        question: "How do I control Pluely during meetings?",
        answer: "Pluely offers fully customizable global keyboard shortcuts for instant access. You can toggle the window, dashboard, system audio, voice input, screenshot, and more with custom keybindings."
    },
];

const FaqTwo = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Ready to Go Invisible Section */}
                <div className='text-center mb-20'>
                    <h2 className='text-5xl font-medium mb-4'>Ready to Go Invisible?</h2>
                    <p className='max-w-3xl text-md mx-auto leading-8 text-gray-600'>
                        Experience AI assistance that operates with complete stealth. Built with Tauri and Rust for blazing-fast performance, absolute privacy, and professional-grade discretion. Your invisible AI companion for meetings, interviews, and presentations.
                    </p>

                    <div className='flex gap-4 justify-center mt-6'>
                        <Button className='bg-gray-900 text-white py-5 px-8 hover:bg-gray-800 shadow-lg'>Get Started</Button>
                        <Button className='bg-white/60 backdrop-blur-sm text-gray-900 border border-gray-200/50 rounded-lg py-5 px-8 hover:bg-white/80 shadow-md'>Learn More</Button>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
                    {/* Left Side - Heading */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
                        <p className="text-gray-600">
                            Can't find what you're looking for? Contact support for further assistance.
                        </p>
                     
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-md rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-100/50 transition-colors"
                                >
                                    <HelpCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                    <span className="flex-1 text-lg font-medium">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                                            openIndex === index ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openIndex === index ? "max-h-48 pb-5 px-5 pl-14" : "max-h-0"
                                    }`}
                                >
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqTwo;
