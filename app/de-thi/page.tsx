"use client";

import { useState } from "react";
import { Menu, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function DeThiPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedExam, setExpandedExam] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const exams = [
    {
      title: "Đề 31/05/2025",
      date: "31/05/2025",
      questions: [
        {
          num: "Câu 1 (3 điểm)",
          desc: "Xóa tất cả phần tử lẻ trong mảng",
          code: `void XoaLe(int *&a, int &n){
	int countChan = 0;
	for (int i = 0; i<n; i++){
		if (a[i] %2 == 0) countChan ++;
	}

	int *pb = new int[countChan];

	int k = 0;
	for (int i = 0; i < n; i++){
		if(a[i] %2 == 0 ){
			pb[k] = a[i]
			k++;
		}
	}
	delete []a;
	a = pb;
	n = countChan;
}`,
        },
        {
          num: "Câu 2 (3 điểm)",
          desc: "Đếm node chứa số nguyên tố",
          code: `bool LaSoNguyenTo(int n){
	if (n < 2 ) return false;
	for (int i = 2; i <= sqrt(n); i++){
		if (n %i == 0) return false;
	}
	return true;
}

int countPrime(Node* h){
	int count = 0;
	while (h != NULL){
		if (LaSoNguyenTo(h->data)){
			count++
		}
		h = h->pNext
	}
	return count;
}`,
        },
        {
          num: "Câu 3 (3 điểm)",
          desc: "Thêm sản phẩm vào tập tin",
          code: `void themSanPham(const char* tenFile, const SanPham& sp){
	FILE *fp;
	fopen_s(&fp, tenFile, "ab");

	if (fp == NULL) {
		printf("Khong the mo file");
		return;
	};

	fwrite(&sp, sizeof(SanPham), 1, fp);
	fclose(fp);
}`,
        },
      ],
    },
    {
      title: "Đề 18/11/2023",
      date: "18/11/2023",
      questions: [
        {
          num: "Câu 1 (3 điểm)",
          desc: "Chèn số 0 sau phần tử lẻ",
          code: `void C1(int*& a, int& n) {
  if (a == NULL || n < 1) return;
  for (int i = 0; i < n; i++) {
    if (a[i] % 2 != 0) {
      int* b = new int[n + 1];
      for (int j = 0; j < i + 1; j++)
        b[j] = a[j];
      b[i + 1] = 0;
      for (int j = i + 2; j < n + 1; j++)
        b[j] = a[j - 1];
      delete[] a;
      a = b;
      n++;
      i++;
    }
  }
}`,
        },
        {
          num: "Câu 2 (3 điểm)",
          desc: "Xóa dòng k trong ma trận",
          code: `void C2(int**& a, int& n, int& m, int k) {
  if (a == NULL || n < 1 || m < 1)
    return;
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
          num: "Câu 3 (4 điểm)",
          desc: "Quản lý sinh viên",
          code: `struct SinhVien {
  char maSV[9];
  char hoTen[51];
  float DTB;
};

void C3a(SinhVien* a, int n) {
  FILE* f;
  fopen_s(&f, "sinhvien.bin", "wb");
  if (f != NULL) {
    fwrite(&n, sizeof(int), 1, f);
    fwrite(a, sizeof(SinhVien), n, f);
    fclose(f);
  }
}

void C3b(SinhVien*& a, int& n) {
  FILE* f;
  fopen_s(&f, "sinhvien.bin", "rb");
  if (f != NULL) {
    fread(&n, sizeof(int), 1, f);
    a = new SinhVien[n];
    fread(a, sizeof(SinhVien), n, f);
    fclose(f);
  }
}

void C3c(SinhVien* a, int n) {
  if (a == NULL || n < 2) return;
  for (int i = 0; i < n - 1; i++) {
    int minIndex = i;
    for (int j = i + 1; j < n; j++)
      if (a[j].DTB > a[minIndex].DTB)
        minIndex = j;
    if (minIndex != i) {
      SinhVien t = a[minIndex];
      a[minIndex] = a[i];
      a[i] = t;
    }
  }
}`,
        },
      ],
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
          <h1 className="text-sm font-semibold">Đề Thi</h1>
          <div className="w-4" />
        </header>

        <main className="flex-1 overflow-y-auto p-1 space-y-1">
          {exams.map((exam, examIndex) => (
            <div key={examIndex}>
              <Card
                className="p-2 bg-card border border-border cursor-pointer hover:bg-accent transition-colors"
                onClick={() =>
                  setExpandedExam(
                    expandedExam === examIndex ? null : examIndex
                  )
                }
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-semibold text-foreground">
                      {exam.title}
                    </h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {exam.date}
                    </p>
                  </div>
                  {expandedExam === examIndex ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </div>
              </Card>

              {expandedExam === examIndex && (
                <div className="space-y-1 mt-1">
                  {exam.questions.map((q, qIndex) => (
                    <Card
                      key={qIndex}
                      className="p-1.5 bg-muted border border-border ml-2"
                    >
                      <h4 className="text-xs font-semibold text-foreground mb-0.5">
                        {q.num}
                      </h4>
                      <p className="text-[9px] text-muted-foreground mb-1">
                        {q.desc}
                      </p>
                      <div className="relative bg-background rounded p-1">
                        <pre className="text-[9px] text-muted-foreground whitespace-pre-wrap break-words leading-tight font-mono">
                          {q.code}
                        </pre>
                        <button
                          onClick={() =>
                            copyToClipboard(q.code, qIndex)
                          }
                          className="absolute top-0.5 right-0.5 p-0.5 bg-primary hover:bg-primary/90 rounded transition-colors"
                          title="Copy code"
                        >
                          {copiedIndex === qIndex ? (
                            <Check
                              size={10}
                              className="text-primary-foreground"
                            />
                          ) : (
                            <Copy
                              size={10}
                              className="text-primary-foreground"
                            />
                          )}
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </main>

        <footer className="p-1.5 border-t border-border bg-card text-center text-xs text-muted-foreground">
          Danh Sách Đề Thi
        </footer>
      </div>
    </div>
  );
}
