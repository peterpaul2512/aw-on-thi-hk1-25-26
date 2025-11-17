"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function DeQuyPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const functions = [
    {
      title: "Hàm tính S(n) = 1 + 2 + 3 + ... + n",
      code: `int S(int n) {
  if (n == 0) return 0;
  int kq = S(n - 1) + n;
  return kq;
}`,
    },
    {
      title: "Hàm tính số hạng thứ n của dãy Fibonacci",
      code: `long Fibo(int n) {
  if (n == 0 || n == 1) return 1;
  return Fibo(n - 1) + Fibo(n - 2);
}`,
    },
    {
      title: "Hàm tính số vi trùng tại thời điểm h",
      code: `int V(int h) {
  if (h < 0) return 0;
  if (h == 0) return 2;
  return 2 * V(h - 1);
}`,
    },
    {
      title: "Hàm tính tiền gửi ngân hàng sau n năm",
      code: `double TK(int n) {
  if (n < 0) return 0;
  if (n == 0) return 1000;
  return 1.12 * TK(n - 1);
}`,
    },
    {
      title: "Hàm tìm vị trí phần tử x (Tìm kiếm nhị phân)",
      code: `int TimKiemNhiPhan(int* a, int n,
                   int l, int r, int x) {
  if (a == NULL || n < 1) return -1;
  if (l > r) return -1;

  int mid = (l + r) / 2;
  if (x == a[mid]) return mid;

  if (x < a[mid])
    return TimKiemNhiPhan(a, n, l, mid-1, x);

  return TimKiemNhiPhan(a, n, mid+1, r, x);
}`,
    },
    {
      title: "Hàm chuyển n đĩa (Tháp Hà Nội)",
      code: `void ChuyenDia(int n, char A,
                  char B, char C) {
  if (n <= 0) return;
  ChuyenDia(n - 1, A, C, B);
  printf("Chuyen dia %d tu %c sang %c\\n",
         n, A, C);
  ChuyenDia(n - 1, B, A, C);
}`,
    },
    {
      title: "Hàm phát sinh hoán vị",
      code: `bool daChon[100] = { false };
void PhatSinhHoanVi(int k, int a[100],
                    int n) {
  if (k >= n) {
    XuatMang(a, n);
    cout << endl;
  }
  else {
    for (int i = 1; i <= n; i++) {
      if (daChon[i] == false) {
        a[k] = i;
        daChon[i] = true;
        PhatSinhHoanVi(k + 1, a, n);
        daChon[i] = false;
      }
    }
  }
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
          <h1 className="text-sm font-semibold">Đệ Quy</h1>
          <div className="w-4" />
        </header>

        <main className="flex-1 overflow-y-auto p-1 space-y-1">
          {functions.map((func, index) => (
            <Card key={index} className="p-1.5 bg-card border border-border">
              <h3 className="text-xs font-semibold text-foreground mb-1 line-clamp-2">{func.title}</h3>
              <div className="relative bg-muted rounded p-1.5 mb-1">
                <pre className="text-[10px] overflow-x-auto text-muted-foreground whitespace-pre-wrap break-words leading-tight font-mono">
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
          Bài tập Đệ Quy
        </footer>
      </div>
    </div>
  );
}
