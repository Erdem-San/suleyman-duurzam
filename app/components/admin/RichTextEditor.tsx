'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
    const ReactQuill = useMemo(
        () => dynamic(() => import('react-quill'), { ssr: false }),
        []
    );

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'align': [] }],
            ['blockquote', 'code-block'],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script',
        'list', 'bullet', 'indent',
        'align',
        'blockquote', 'code-block',
        'link', 'image', 'video'
    ];

    return (
        <div className="rich-text-editor">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder || 'Write your blog content here...'}
                className="bg-slate-900 text-white rounded-lg border border-slate-700"
            />
            <style jsx global>{`
                .rich-text-editor .ql-toolbar {
                    background: #1e293b;
                    border: 1px solid #334155;
                    border-radius: 0.5rem 0.5rem 0 0;
                }
                
                .rich-text-editor .ql-container {
                    background: #0f172a;
                    border: 1px solid #334155;
                    border-radius: 0 0 0.5rem 0.5rem;
                    min-height: 400px;
                    font-size: 16px;
                }
                
                .rich-text-editor .ql-editor {
                    color: #e2e8f0;
                    min-height: 400px;
                }
                
                .rich-text-editor .ql-editor.ql-blank::before {
                    color: #64748b;
                    font-style: normal;
                }
                
                .rich-text-editor .ql-stroke {
                    stroke: #94a3b8;
                }
                
                .rich-text-editor .ql-fill {
                    fill: #94a3b8;
                }
                
                .rich-text-editor .ql-picker-label {
                    color: #94a3b8;
                }
                
                .rich-text-editor .ql-picker-options {
                    background: #1e293b;
                    border: 1px solid #334155;
                }
                
                .rich-text-editor .ql-picker-item {
                    color: #94a3b8;
                }
                
                .rich-text-editor .ql-picker-item:hover {
                    color: #e2e8f0;
                }
                
                .rich-text-editor .ql-toolbar button:hover,
                .rich-text-editor .ql-toolbar button:focus,
                .rich-text-editor .ql-toolbar button.ql-active {
                    color: #3b82f6;
                }
                
                .rich-text-editor .ql-toolbar button:hover .ql-stroke,
                .rich-text-editor .ql-toolbar button:focus .ql-stroke,
                .rich-text-editor .ql-toolbar button.ql-active .ql-stroke {
                    stroke: #3b82f6;
                }
                
                .rich-text-editor .ql-toolbar button:hover .ql-fill,
                .rich-text-editor .ql-toolbar button:focus .ql-fill,
                .rich-text-editor .ql-toolbar button.ql-active .ql-fill {
                    fill: #3b82f6;
                }
            `}</style>
        </div>
    );
}
