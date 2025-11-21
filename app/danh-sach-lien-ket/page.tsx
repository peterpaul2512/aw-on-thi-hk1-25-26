"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function DanhSachLienKetPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const functions = [
    {
      title: "Cấu trúc Node",
      code: `struct Node {
  int Data;
  Node* pNext;
};`,
    },
    {
      title: "Cấu trúc LinkedList",
      code: `struct LinkedList {
  Node* pHead;
  Node* pTail;
};`,
    },
    {
      title: "Hàm khởi tạo node",
      code: `Node* CreateNote(int x) {
  Node* node = new Node;
  node->Data = x;
  node->pNext = NULL;
  return node;
}`,
    },
    {
      title: "Hàm khởi tạo danh sách",
      code: `void InitList(LinkedList& list) {
  list.pHead = NULL;
  list.pTail = NULL;
}`,
    },
    {
      title: "Hàm in danh sách",
      code: `void PrintList(LinkedList list) {
  for (Node* node = list.pHead;
       node != NULL;
       node = node->pNext) {
    cout << node->Data << " ";
  }
}`,
    },
    {
      title: "Hàm nhập danh sách",
      code: `void InputList(LinkedList& list) {
  InitList(list);
  int n, giaTri;
  cout << "Nhap so phan tu: ";
  cin >> n;
  for (int i = 0; i < n; i++) {
    cout << "Nhap phan tu " << i << ": ";
    cin >> giaTri;
    Node* newNode = CreateNote(giaTri);
    if (list.pHead == NULL) {
      list.pHead = newNode;
      list.pTail = newNode;
    } else {
      list.pTail->pNext = newNode;
      list.pTail = newNode;
    }
  }
}`,
    },
    {
      title: "Hàm thêm node vào đầu",
      code: `void InsertHead(LinkedList& list,
                   Node* p) {
  if (p == NULL) return;
  if (list.pHead == NULL) {
    list.pHead = p;
    list.pTail = p;
  } else {
    p->pNext = list.pHead;
    list.pHead = p;
  }
}`,
    },
    {
      title: "Hàm thêm node vào cuối",
      code: `void InsertTail(LinkedList& list,
                  Node* p) {
  if (p == NULL) return;
  if (list.pHead == NULL) {
    list.pHead = p;
    list.pTail = p;
  } else {
    list.pTail->pNext = p;
    list.pTail = p;
  }
}`,
    },
    {
      title: "Hàm thêm node p vào sau node q",
      code: `void InsertAfter(LinkedList& list,
                   Node* q, Node* p) {
  if (p == NULL) return;
  if (q == NULL)
    InsertHead(list, p);
  else {
    p->pNext = q->pNext;
    q->pNext = p;
    if (q == list.pTail)
      list.pTail = p;
  }
}`,
    },
    {
      title: "Hàm thêm node p vào trước node q",
      code: `void InsertBefore(LinkedList& list,
                    Node* q, Node* p) {
  if (p == NULL) return;
  if (q == NULL)
    InsertHead(list, p);
  else {
    if (q == list.pHead)
      InsertHead(list, p);
    else {
      Node* prev = NULL;
      Node* node = list.pHead;
      while (node != q && node != NULL) {
        prev = node;
        node = node->pNext;
      }
      if (node == NULL) return;
      p->pNext = q;
      prev->pNext = p;
    }
  }
}`,
    },
    {
      title: "Hàm xóa node đầu",
      code: `void RemoveHead(LinkedList& list) {
  if (list.pHead == NULL) return;
  Node* node = list.pHead;
  list.pHead = list.pHead->pNext;
  delete node;
  if (list.pHead == NULL)
    list.pTail = NULL;
}`,
    },
    {
      title: "Hàm xóa node cuối",
      code: `void RemoveTail(LinkedList& list) {
  if (list.pHead == NULL) return;
  if (list.pHead == list.pTail) {
    delete list.pTail;
    list.pHead = NULL;
    list.pTail = NULL;
    return;
  }
  Node* prev = list.pHead;
  while (prev->pNext != list.pTail) {
    prev = prev->pNext;
  }
  delete list.pTail;
  prev->pNext = NULL;
  list.pTail = prev;
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
          <h1 className="text-sm font-semibold">Danh Sách Liên Kết</h1>
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
          Danh Sách Liên Kết Đơn
        </footer>
      </div>
    </div>
  );
}
