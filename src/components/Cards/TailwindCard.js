export const TailwindCard = ({title, value, color, }) => {
    return (
        <div className={`box-border h-32 w-62 text-center p-12 border rounded-lg ${color}`}>
          <h1>{title}</h1>
          <h1>{value}</h1>
        </div>
    )
};