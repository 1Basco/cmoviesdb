import { Icon } from "@iconify/react/dist/iconify.js";
import PrimaryButton from "../Buttons/Primary";
import SecondaryButton from "../Buttons/Secondary";
import useIsMobile from "@/app/hooks/isMobile";

interface PaginationProps {
  maxPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ maxPage, currentPage, onPageChange }: PaginationProps) {
  const isMobile = useIsMobile();
  const generatePageRange = () => {
    const pageNumber = isMobile ? 2 : 4;
    const additionalPage = isMobile ? 1 : 2;
    const pages = [];
    let start = Math.max(1, currentPage - additionalPage);
    let end = Math.min(maxPage, currentPage + additionalPage);

    if (end - start < pageNumber) {
      if (start === 1) {
        end = Math.min(maxPage, start + pageNumber);
      } else {
        start = Math.max(1, end - pageNumber);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= maxPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center gap-[10px]">
      {currentPage === 1 ? (
        <SecondaryButton
          label={<Icon icon="lets-icons:expand-left" className="text-xl" />}
          onClick={() => {}}
          isLoading={false}
          disabled={true}
        />
      ) : (
        <PrimaryButton
          label={<Icon icon="lets-icons:expand-left" className="text-xl" />}
          onClick={() => handlePageChange(currentPage - 1)}
          isLoading={false}
          disabled={currentPage === 1}
        />
      )}

      {/* Page Number Buttons */}
      {generatePageRange().map((page) =>
        page === currentPage ? (
          <SecondaryButton
            key={page}
            label={page.toString()}
            onClick={() => {}}
            isLoading={false}
            disabled={true}
          />
        ) : (
          <PrimaryButton
            key={page}
            label={page.toString()}
            onClick={() => handlePageChange(page)}
            isLoading={false}
            disabled={page === currentPage}
          />
        )
      )}

      {currentPage === maxPage ? (
        <SecondaryButton
          label={<Icon icon="lets-icons:expand-right" className="text-xl" />}
          onClick={() => {}}
          isLoading={false}
          disabled={true}
        />
      ) : (
        <PrimaryButton
          label={
            <Icon
              icon="lets-icons:expand-right"
              className="text-xl dark:text-mauve-1 text-mauvedark-1"
            />
          }
          onClick={() => handlePageChange(currentPage + 1)}
          isLoading={false}
          disabled={currentPage === maxPage}
        />
      )}
    </div>
  );
}

export default Pagination;
