interface IProps {
    children: React.ReactNode;
    gap?: number;
}

export default function RowGroup({children, gap}: IProps) {
    return (
        <div style={{
            display: 'flex',
            gap: gap
        }}>
            {children}
        </div>
    )
}