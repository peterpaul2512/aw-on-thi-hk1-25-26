"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function QueuePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const functions = [
    {
      title: "Cấu trúc Queue",
      code: `struct Queue {
  Node* pHead;
  Node* pTail;
};`,
    },
    {
      title: "Hàm khởi tạo Queue",
      code: `void InitQueue(Queue& queue) {
  queue.pHead = NULL;
  queue.pTail = NULL;
}`,
    },
    {
      title: "Hàm kiểm tra Queue rỗng",
      code: `bool IsEmpty(Queue queue) {
  return queue.pHead == NULL;
}`,
    },
    {
      title: "Hàm thêm phần tử (Enqueue)",
      code: `void Enqueue(Queue& queue, int x) {
  Node* p = CreateNote(x);
  if (p == NULL) return;
  if (queue.pHead == NULL) {
    queue.pHead = p;
    queue.pTail = p;
  } else {
    queue.pTail->pNext = p;
    queue.pTail = p;
  }
}`,
    },
    {
      title: "Hàm lấy phần tử (Dequeue)",
      code: `int Dequeue(Queue& queue) {
  if (queue.pHead == NULL)
    throw "Queue is empty";

  Node* node = queue.pHead;
  queue.pHead = queue.pHead->pNext;
  int value = node->Data;
  delete node;
  if (queue.pHead == NULL)
    queue.pTail = NULL;

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
          <h1 className="text-sm font-semibold">Queue</h1>
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
          Queue (Hàng Đợi)
        </footer>
      </div>
    </div>
  );
}
