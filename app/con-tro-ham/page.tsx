"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function ConTroHamPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const functions = [
    {
      title: "Hàm tìm cực trị",
      code: `int TimCucTri(int* a, int n,
              bool (*KiemTraTotHon)(int, int)) {
  if (n <= 0) return 0;
  int kq = a[0];
  for (int i = 1; i < n; i++) {
    if (KiemTraTotHon(a[i], kq))
      kq = a[i];
  }
  return kq;
}

bool LaLonHon(int a, int b) {
  return a > b;
}

bool LaBeHon(int a, int b) {
  return a < b;
}`,
    },
    {
      title: "Hàm tìm số dương nhỏ nhất",
      code: `int TimDuongNhoNhat(int* a, int n) {
  if (a == NULL || n < 1) return -1;

  int minIndex = -1;
  for (int i = 0; i < n; i++) {
    if (a[i] > 0) {
      if (minIndex == -1 ||
          a[i] < a[minIndex]) {
        minIndex = i;
      }
    }
  }
  return minIndex;
}`,
    },
    {
      title: "Hàm tìm số nguyên tố nhỏ nhất",
      code: `bool KiemTraNguyenTo(int n) {
  if (n < 2) return false;
  for (int i = 2; i <= sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

int TimNguyenToNhoNhat(int* a, int n) {
  if (a == NULL || n < 1) return -1;

  int minIndex = -1;
  for (int i = 0; i < n; i++) {
    if (KiemTraNguyenTo(a[i]) == true) {
      if (minIndex == -1 ||
          a[i] < a[minIndex]) {
        minIndex = i;
      }
    }
  }
  return minIndex;
}`,
    },
    {
      title: "Hàm tìm số tốt nhất thỏa điều kiện",
      code: `int TimSoNguyenTotNhatThoaDieuKien(
    int* a, int n,
    bool(*KiemTraDieuKien)(int),
    bool(*KiemTraTotHon)(int, int)) {
  if (a == NULL || n < 1) return -1;

  int resultIndex = -1;
  for (int i = 0; i < n; i++) {
    if (KiemTraDieuKien(a[i]) == true) {
      if (resultIndex == -1 ||
          KiemTraTotHon(a[i],
                        a[resultIndex])) {
        resultIndex = i;
      }
    }
  }
  return resultIndex;
}`,
    },
    {
      title: "Hàm tìm phần tử tốt nhất (void*)",
      code: `int TimPhanTuTotNhatThoaDieuKien(
    void* a, int n, int size,
    bool(*KiemTraDieuKien)(void*),
    bool(*KiemTraTotHon)(void*, void*)) {
  if (a == NULL || n < 1) return -1;

  int resultIndex = -1;
  for (int i = 0; i < n; i++) {
    void* pointerToI =
      (char*)a + i * size;
    if (KiemTraDieuKien(pointerToI)) {
      void* pointerToResultIndex =
        (char*)a + resultIndex * size;
      if (resultIndex == -1 ||
          KiemTraTotHon(pointerToI,
                        pointerToResultIndex)) {
        resultIndex = i;
      }
    }
  }
  return resultIndex;
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
          <h1 className="text-sm font-semibold">Con Trỏ Hàm</h1>
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
          Con Trỏ Hàm
        </footer>
      </div>
    </div>
  );
}
