import ReactMarkdown from 'react-markdown';

const Content = ({ content, date }) => {
    return (
        <div>
            <span className='job__detail-date'>diposting pada {date}</span>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default Content
