"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function Mang2ChieuPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const functions = [
    {
      title: "Hàm nhập ma trận",
      code: `void NhapMaTran(int**& a, int& n, int& m) {
  printf("Nhap so dong: ");
  scanf_s("%d", &n);
  printf("Nhap so cot: ");
  scanf_s("%d", &m);

  if (n <= 0 || m <= 0) {
    printf("Kich thuoc khong hop le.\\n");
    a = NULL;
    return;
  }

  a = new int*[n];
  for (int i = 0; i < n; i++) {
    a[i] = new int[m];
    for (int j = 0; j < m; j++) {
      printf("Nhap phan tu a[%d][%d]: ", i, j);
      scanf_s("%d", &a[i][j]);
    }
  }
}`,
    },
    {
      title: "Hàm xuất ma trận",
      code: `void XuatMaTran(int** a, int n, int m) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      printf("%5d", a[i][j]);
    }
    printf("\\n");
  }
}`,
    },
    {
      title: "Bài 400: Xóa 1 dòng trong ma trận",
      code: `void Bai400(int**& a, int& n, int& m, int k) {
  if (k < 0 || k > n - 1) return;

  delete[] a[k];

  int** b = new int* [n - 1];
  for (int i = 0; i < k; i++)
    b[i] = a[i];
  for (int i = k + 1; i < n; i++)
    b[i - 1] = a[i];
  
  delete[] a;
  a = b;
  n--;
}`,
    },
    {
      title: "Bài 401: Xóa 1 cột trong ma trận",
      code: `void Bai401(int**& a, int& n, int& m, int k) {
  if (a == NULL || n <= 0 || m <= 0) return;
  if (k < 0 || k > m - 1) return;

  for (int i = 0; i < n; i++) {
    int* b = new int[m - 1];
    for (int j = 0; j < k; j++)
      b[j] = a[i][j];
    for (int j = k + 1; j < m; j++)
      b[j - 1] = a[i][j];
    delete[] a[i];
    a[i] = b;
  }
  m--;
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
          <h1 className="text-sm font-semibold">Mảng 2 Chiều</h1>
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
          Bài tập Mảng 2 Chiều
        </footer>
      </div>
    </div>
  );
}
