// A07_IJumsu.ts

// export가 붙어야 다른 파일에서 참조해서 사용 가능하다.
export interface IJumsu {
    iname: string;

    onTotal(): number;
    onAvg(num: number): number;
    display(): string;
}