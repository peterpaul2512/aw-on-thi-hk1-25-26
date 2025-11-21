"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function Mang1ChieuPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const functions = [
    {
      title: "Hàm nhập mảng 1 chiều",
      code: `void NhapMang(int* &a, int& n) {
  cout << "Nhap so luong phan tu: ";
  cin >> n;

  a = new int[n];
  if (a == NULL) {
    cout << "Khong cap phat du bo nho";
    a = NULL;
    return;
  }
  for (int i = 0; i < n; i++) {
    cout << "Nhap phan tu a[" << i << "]: ";
    cin >> a[i];
  }
}`,
    },
    {
      title: "Hàm hủy mảng 1 chiều",
      code: `void HuyMang(int*& a) {
  delete[] a;
  a = NULL;
}`,
    },
    {
      title: "Hàm xuất mảng 1 chiều",
      code: `void XuatMang(int* a, int n) {
  for (int i = 0; i < n; i++)
    cout << a[i];
}`,
    },
    {
      title: "Bài 266: Thêm 1 phần tử x vào mảng tại vị trí k",
      code: `void Bai266(int*& a, int& n, int k, int x) {
  if (a == NULL || n <= 0) {
    cout << "Mang khong hop le.";
    return;
  }
  if (k < 0 || k > n) {
    cout << "Vi tri khong hop le.";
    return;
  }

  int* pb = new int[n + 1];
  if (pb == NULL) {
    cout << "Khong cap phat duoc bo nho.";
    return;
  }
  for (int i = 0; i < k; i++) {
    pb[i] = a[i];
  }
  pb[k] = x;
  for (int i = k; i < n; i++) {
    pb[i + 1] = a[i];
  }

  n++;

  delete[] a;
  a = pb;
}`,
    },
    {
      title: "Bài 271: Xóa phần tử có chỉ số k trong mảng",
      code: `void Bai271(int*& a, int& n, int k) {
  if (a == NULL || n <= 0) {
    cout << "Mang khong hop le.";
    return;
  }
  if (k < 0 || k >= n) {
    cout << "Vi tri khong hop le.";
    return;
  }

  int* pb = new int[n - 1];
  if (pb == NULL) {
    cout << "Khong cap phat duoc bo nho.";
    return;
  }
  for (int i = 0; i < k; i++) {
    pb[i] = a[i];
  }
  for (int i = k; i < n - 1; i++) {
    pb[i] = a[i + 1];
  }

  n--;

  delete[] a;
  a = pb;
}`,
    },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden" style={{ maxWidth: "416px", maxHeight: "496px" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-2 border-b border-border bg-card">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-accent rounded transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={18} />
          </button>
          <h1 className="text-sm font-semibold">Mảng 1 Chiều</h1>
          <div className="w-4" />
        </header>

        {/* Content Area - Scrollable */}
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

        {/* Footer */}
        <footer className="p-1.5 border-t border-border bg-card text-center text-xs text-muted-foreground">
          Bài tập Mảng 1 Chiều
        </footer>
      </div>
    </div>
  );
}
