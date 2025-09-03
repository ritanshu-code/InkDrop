import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react';
 
export default function RTE({ name, control, lable, defaultValue = "" }) {
  return (
    <div>
        {lable && <lable>{lable}</lable>}

        <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}})=>(
            <Editor
            apiKey='co3wydz3579e97l8wqflpu8lch11169ufqyruxo50h9t2ur4'
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
              height: 400,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}

