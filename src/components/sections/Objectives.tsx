import React from 'react';
import { Award } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Objectives = () => {
  // Renamed for clarity but keeping the component name the same to avoid breaking imports
  return (
    <section id="certifications" className="px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6 gap-4">
          <Award className="text-code-orange" size={28} />
          <h2 className="text-3xl font-bold text-code-orange">
            <span className="keyword">const</span> <span className="function">certifications</span> = () => &#123;
          </h2>
        </div>
        
        <div className="pl-8 md:pl-16">
          <div className="code-line">
            <span className="line-number">01</span>
            <span className="comment">// Professional certifications and achievements</span>
          </div>
          
          <div className="code-line mt-4">
            <span className="line-number">02</span>
            <span className="keyword">return</span> (
          </div>
          
          <div className="pl-8 mt-4">
            <div className="code-line">
              <span className="line-number">03</span>
              <Table className="border border-border rounded-md overflow-hidden">
                <TableHeader>
                  <TableRow className="hover:bg-secondary/30">
                    <TableHead className="text-code-blue">Certification</TableHead>
                    <TableHead className="text-code-teal">Organization</TableHead>
                    <TableHead className="text-code-yellow">Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-secondary/30">
                    <TableCell className="font-medium">AWS Certified Solutions Architect</TableCell>
                    <TableCell>Amazon Web Services</TableCell>
                    <TableCell>2024</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-secondary/30">
                    <TableCell className="font-medium">Professional Scrum Master (PSM I)</TableCell>
                    <TableCell>Scrum.org</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-secondary/30">
                    <TableCell className="font-medium">Certified Kubernetes Administrator</TableCell>
                    <TableCell>Cloud Native Computing Foundation</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-secondary/30">
                    <TableCell className="font-medium">Full Stack Web Development</TableCell>
                    <TableCell>Udacity</TableCell>
                    <TableCell>2022</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
          <div className="code-line mt-4">
            <span className="line-number">04</span>
            );
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="text-2xl font-bold">
            &#125;;
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
