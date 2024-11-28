import { useState } from 'react'

const Accordion = ({ items }) => {
	const [openIndex, setOpenIndex] = useState(null)

	const toggle = index => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className='space-y-2'>
			{items.map((item, index) => (
				<div key={index} className='faq-accardion overflow-hidden'>
					<button
						onClick={() => toggle(index)}
						className='faq_acc_title w-full text-left p-4 focus:outline-none'
					>
						{item.title}
					</button>
					{openIndex === index && (
						<div className='faq_acc_info p-4 bg-white text-gray-700'>
							{item.content}
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default Accordion
