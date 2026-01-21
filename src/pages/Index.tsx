import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import { coursesData } from "@/data/flashcards";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId: number) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <Layout
      title="Course Library"
      subtitle="Master the mechanics of deep learning through interactive blueprints and rigorous technical documentation."
      tag="ENGINEERING TRACK"
      showSearch
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {coursesData.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            moduleCount={course.moduleCount}
            progress={course.progress}
            status={course.status}
            tag={course.tag}
            imageUrl={course.imageUrl}
            onClick={() => handleCourseClick(course.id)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
