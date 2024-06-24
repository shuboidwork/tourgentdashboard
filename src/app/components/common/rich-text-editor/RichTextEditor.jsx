'use client'
import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

export default function Editor() {
  const initialState = [{ type: "paragraph", children: [{ text: "edit me" }] }];
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialState);

  const handleFormat = (format) => {
    editor.exec({ type: format });
  };

  return (
    <div style={{ border: "1px solid gray", borderRadius: "10px", padding: 12 }}>
      <div>
        <button onClick={() => handleFormat("bold")}>Bold</button>
        <button onClick={() => handleFormat("italic")}>Italic</button>
        <button onClick={() => handleFormat("underline")}>Underline</button>
      </div>
      <Slate editor={editor} value={value || []} onChange={(newVal) => setValue(newVal)}>
        <Editable />
      </Slate>
    </div>
  );
}
