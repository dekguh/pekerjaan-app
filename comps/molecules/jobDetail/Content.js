import ReactMarkdown from 'react-markdown';

const Content = ({ content }) => {
    return (
        <div>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default Content
