import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const RichTextRenderer = ({ richTextDocument, className }) => {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { file, title, description } = node.data.target.fields;

                // Check if the file is an image
                if (file.contentType.startsWith('image/')) {
                    return (
                        <img
                            src={file.url}
                            alt={description || title}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    );
                }

                // Handle other asset types (like documents) if needed
                return (
                    <a href={file.url} target="_blank" rel="noopener noreferrer">
                        {title || 'Download'}
                    </a>
                );
            },

            // Move the CODE block styling here under renderNode
            [BLOCKS.CODE]: (node) => {
                return (
                    <pre style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '5px', overflowX: 'auto' }}>
                        <code style={{ fontFamily: 'monospace', color: '#333' }}>
                            {node.content[0].value} 
                        </code>
                    </pre>
                );
            }
        }
    };

    return <div className={className}>{documentToReactComponents(richTextDocument, options)}</div>;
};

export default RichTextRenderer;
