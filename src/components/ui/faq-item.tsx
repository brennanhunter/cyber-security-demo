'use client'

import { useState } from 'react'
import { ReactNode } from 'react'

interface FAQItemProps {
  question: string
  answer: string | ReactNode
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-raisin-black/20 bg-white p-6 hover:shadow-lg transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center text-raisin-black hover:text-steel-pink transition-colors"
      >
        <span className="font-alliance text-lg font-medium pr-4">{question}</span>
        <span className="text-2xl text-steel-pink flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
        <div className="pt-4">
          <div className="font-alliance text-raisin-black/80 leading-relaxed">
            {typeof answer === 'string' ? <p>{answer}</p> : answer}
          </div>
        </div>
      )}
    </div>
  )
}