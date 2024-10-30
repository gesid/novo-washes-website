import { styled } from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 2),
}));

const CustomConnector = styled(TimelineConnector)({
  backgroundColor: "#36BCEE",
});

const titleColors = ["#E72B78", "#74C76B", "#E46F1B", "#36BCEE"]; // Alternating colors for titles
const dotColors = ["#E72B78", "#74C76B", "#E46F1B", "#36BCEE"]; // Alternating colors for TimelineDot

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {[
        {
          year: "2024",
          title: "Primeira edição",
          description:
            "Realizado em *Local*, o WASHES teve X artigos publicados. Saiba mais!",
        },
        {
          year: "2023",
          title: "Segunda edição",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida enim, in aliquet nulla varius vel.",
        },
        {
          year: "2022",
          title: "Terceira edição",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida enim, in aliquet nulla varius vel.",
        },
        {
          year: "2021",
          title: "Quarta edição",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida enim, in aliquet nulla varius vel.",
        },
        {
          year: "2020",
          title: "Quarta edição",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida enim, in aliquet nulla varius vel.",
        },
        {
          year: "2019",
          title: "Quarta edição",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida enim, in aliquet nulla varius vel.",
        },
        {
          year: "2018",
          title: "Quarta edição",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida enim, in aliquet nulla varius vel.",
        },
        {
          year: "2017",
          title: "Quarta edição",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida enim, in aliquet nulla varius vel.",
        },
        {
          year: "2016",
          title: "Quarta edição",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida enim, in aliquet nulla varius vel.",
        },
      ].map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" sx={{ color: "#000" }}>
              {item.year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                cursor: "pointer",
                backgroundColor: dotColors[index % dotColors.length],
                color: "#fff",
              }}
            >
              <AddCircleIcon />
            </TimelineDot>
            <CustomConnector />
          </TimelineSeparator>
          <TimelineContent>
            <StyledPaper elevation={3}>
              <Typography
                variant="h6"
                component="h1"
                sx={{ color: titleColors[index % titleColors.length] }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: "#000" }}>{item.description}</Typography>
            </StyledPaper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
