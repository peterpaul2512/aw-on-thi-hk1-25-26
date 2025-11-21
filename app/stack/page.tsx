"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function StackPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const functions = [
    {
      title: "Cấu trúc Stack",
      code: `struct Stack {
  Node* pHead;
};`,
    },
    {
      title: "Hàm khởi tạo Stack",
      code: `void InitStack(Stack& stack) {
  stack.pHead = NULL;
}`,
    },
    {
      title: "Hàm kiểm tra Stack rỗng",
      code: `bool IsEmpty(Stack stack) {
  return stack.pHead == NULL;
}`,
    },
    {
      title: "Hàm thêm phần tử (Push)",
      code: `void Push(Stack& stack, int x) {
  Node* p = CreateNote(x);
  if (stack.pHead == NULL)
    stack.pHead = p;
  else {
    p->pNext = stack.pHead;
    stack.pHead = p;
  }
}`,
    },
    {
      title: "Hàm lấy phần tử (Pop)",
      code: `int Pop(Stack& stack) {
  if (stack.pHead == NULL)
    throw "Stack is empty";

  Node* node = stack.pHead;
  int value = node->Data;
  stack.pHead = stack.pHead->pNext;
  delete node;

  return value;
}`,
    },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden" style={{ maxWidth: "416px", maxHeight: "496px" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-2 border-b border-border bg-card">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-accent rounded transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={18} />
          </button>
          <h1 className="text-sm font-semibold">Stack</h1>
          <div className="w-4" />
        </header>

        <main className="flex-1 overflow-y-auto p-1 space-y-1">
          {functions.map((func, index) => (
            <Card key={index} className="p-1.5 bg-card border border-border">
              <h3 className="text-xs font-semibold text-foreground mb-1 line-clamp-2">{func.title}</h3>
              <div className="relative bg-muted rounded p-1.5 mb-1">
                <pre className="text-[10px] text-muted-foreground whitespace-pre-wrap break-words leading-tight font-mono">
                  {func.code}
                </pre>
                <button
                  onClick={() => copyToClipboard(func.code, index)}
                  className="absolute top-1 right-1 p-0.5 bg-primary hover:bg-primary/90 rounded transition-colors"
                  title="Copy code"
                >
                  {copiedIndex === index ? (
                    <Check size={12} className="text-primary-foreground" />
                  ) : (
                    <Copy size={12} className="text-primary-foreground" />
                  )}
                </button>
              </div>
            </Card>
          ))}
        </main>

        <footer className="p-1.5 border-t border-border bg-card text-center text-xs text-muted-foreground">
          Stack (Ngăn Xếp)
        </footer>
      </div>
    </div>
  );
}
