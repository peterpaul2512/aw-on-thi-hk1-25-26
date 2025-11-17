"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function DocGhiTapTinPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const functions = [
    {
      title: "Hàm ghi mảng 1 chiều số nguyên ra tập tin nhị phân",
      code: `void GhiFileNhiPhan(int* a, int n) {
  FILE* fp;
  fopen_s(&fp, "myfile.bin", "wb");
  if (fp != NULL) {
    fwrite(&n, sizeof(int), 1, fp);
    fwrite(a, sizeof(int), n, fp);
    fclose(fp);
  }
}`,
    },
    {
      title: "Hàm đọc mảng 1 chiều số nguyên từ tập tin nhị phân",
      code: `void DocFileNhiPhan(int* &a, int &n) {
  FILE* fp;
  fopen_s(&fp, "myfile.bin", "rb");
  if (fp != NULL) {
    fread(&n, sizeof(int), 1, fp);
    a = new int[n];
    fread(a, sizeof(int), n, fp);
    fclose(fp);
  }
}`,
    },
    {
      title: "Hàm ghi mảng 1 chiều dữ liệu có cấu trúc ra tập tin nhị phân",
      code: `void GhiMangHocSinh(HocSinh* a, int n) {
  FILE* fp;
  fopen_s(&fp, "hocsinh.bin", "wb");
  if (fp != NULL) {
    fwrite(&n, sizeof(int), 1, fp);
    fwrite(a, sizeof(HocSinh), n, fp);
    fclose(fp);
  }
}`,
    },
    {
      title: "Hàm đọc mảng 1 chiều dữ liệu có cấu trúc từ tập tin nhị phân",
      code: `void DocMangHocSinh(HocSinh*& a, int& n) {
  FILE* fp;
  fopen_s(&fp, "hocsinh.bin", "rb");
  if (fp != NULL) {
    fread(&n, sizeof(int), 1, fp);
    a = new HocSinh[n];
    fread(a, sizeof(HocSinh), n, fp);
    fclose(fp);
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
          <h1 className="text-sm font-semibold">Đọc & Ghi Tập Tin</h1>
          <div className="w-4" />
        </header>

        {/* Content Area - Scrollable */}
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

        {/* Footer */}
        <footer className="p-1.5 border-t border-border bg-card text-center text-xs text-muted-foreground">
          Đọc & Ghi Tập Tin Nhị Phân
        </footer>
      </div>
    </div>
  );
}
