import { Grid, Skeleton, Stack } from "@mui/material";

const SkeletonItem = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Skeleton variant="rectangular" width={100} height={100} />
      <Stack spacing={0.5} sx={{ width: "70%" }}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </Stack>
    </Stack>
  );
};

const LatestProductsSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {Array(8)
        .fill(0)
        .map((item, index) => (
          <Grid item xs={6} key={index}>
            <SkeletonItem />
          </Grid>
        ))}
    </Grid>
  );
};

export default LatestProductsSkeleton;
